import { ResponseCategory } from "~~/prisma/generated/client/client";

/**
 * 
 * @param whisperId Whisper Id
 * @param whisper Whisper
 * @param responseCategory ResponseCategory Enum
 * @returns Response
 */
export const whisperReply = async (whisperId: number, content: string, responseCategory: ResponseCategory) => {
  return await prisma.response.create({
    data: {
      content: content,
      category: responseCategory,
      whisper: {
        connect: {
          id: whisperId,
        },
      },
    },
  });
}