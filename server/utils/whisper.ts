import { Whisper } from "~~/prisma/generated/client/client";
import { Category } from "~~/prisma/generated/client/enums";

/**
 * Get all whispers from the database, ordered by creation date (newest first).
 * @returns Whisper[] - An array of Whisper objects.
 */
export const getWhispers = async (take?: number): Promise<Whisper[]> => {
  return await prisma.whisper.findMany({
    take: take,
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * Get a single whisper by its ID.
 * @param id number
 * @returns Whisper
 */
export const getWhisperById = async (id: number): Promise<Whisper | null> => {
  return await prisma.whisper.findUnique({
    where: {
      id,
    },
  });
}

/**
 * Get all whispers from the database that match a specific category, ordered by creation date (newest first).
 * @param category Category
 * @returns Whipser[]
 */
export const getWhispersByCategory = async (category: Category): Promise<Whisper[]> => {
  return await prisma.whisper.findMany({
    where: {
      category,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

// create top level whisper
export const createWhisper = async (category: Category, whisper: string): Promise<Whisper> => {
  return await prisma.whisper.create({
    data: {
      category,
      content: whisper,
    },
  });
}