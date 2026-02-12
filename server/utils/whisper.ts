import { Whisper, Response } from "~~/prisma/generated/client/client";
import { Category } from "~~/prisma/generated/client/enums";

/**
 * Get all whispers from the database, ordered by creation date (newest first).
 * @returns Whisper[] - An array of Whisper objects.
 */
export const getWhispers = async (take?: number): Promise<(Omit<Whisper, "password" | "userId"> & { responses: Response[] })[]> => {
  return await prisma.whisper.findMany({
    take: take,
    select: {
      id: true,
      category: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      likes: true,
      loves: true,
      supports: true,
      responses: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/**
 * Get a single whisper by its ID.
 * @param id number
 * @returns Whisper
 */
export const getWhisperById = async (id: number): Promise<Omit<Whisper, "password" | "userId"> | null> => {
  return await prisma.whisper.findUnique({
    where: {
      id,
    },
  });
};

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
};

/**
 *
 * @param category Whisper Category
 * @param content string content
 * @returns Whisper
 */
export const createWhisper = async (category: Category, content: string, password?: string): Promise<Whisper> => {
  return await prisma.whisper.create({
    data: {
      category,
      content: content,
      password,
    },
  });
};

/**
 * Increment the love count of a whisper by 1.
 * @param whisperId Whisper ID
 * @returns Whisper
 */
export const giveWhisperLove = async (whisperId: number): Promise<Whisper | null> => {
  return await prisma.whisper.update({
    where: {
      id: whisperId,
    },
    data: {
      loves: {
        increment: 1,
      },
    },
  });
};

/**
 * increment the like count of a whisper by 1.
 * @param whisperId Whisper Id
 * @returns Whisper
 */
export const giveWhisperLikes = async (whisperId: number): Promise<Whisper | null> => {
  return await prisma.whisper.update({
    where: {
      id: whisperId,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
};

/**
 * increment the Supports count of a whisper by 1.
 * @param whisperId Whisper Id
 * @returns Whisper
 */
export const giveWhisperSupports = async (whisperId: number): Promise<Whisper | null> => {
  return await prisma.whisper.update({
    where: {
      id: whisperId,
    },
    data: {
      supports: {
        increment: 1,
      },
    },
  });
};
