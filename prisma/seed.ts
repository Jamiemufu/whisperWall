import { PrismaClient } from "./generated/client/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Category, ResponseCategory } from "./generated/client/enums";
import { faker } from "@faker-js/faker";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

// This file to seed random whispers into the database for testing purposes.
const seed = async () => {
  const categories = Object.values(Category);
  const responseCategories = Object.values(ResponseCategory);
  for (let i = 0; i < 200; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const responseCount = faker.number.int({ min: 1, max: 4 });
    const randomWhisper = faker.lorem.sentence();
    await prisma.whisper.create({
      data: {
        category: randomCategory,
        content: randomWhisper,
        likes: faker.number.int({ min: 0, max: 100 }),
        loves: faker.number.int({ min: 0, max: 100 }),
        supports: faker.number.int({ min: 0, max: 100 }),
        responses: {
          create: Array.from({ length: responseCount }, () => ({
            category: responseCategories[Math.floor(Math.random() * responseCategories.length)],
            content: faker.lorem.sentence(),
          })),
        },
      },
    });
  }
}

seed().then(() => {
  console.log("Seeding completed!");
  prisma.$disconnect();
})