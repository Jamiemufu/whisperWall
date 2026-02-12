import * as z from "zod"
import { ResponseCategory } from "~~/prisma/generated/client/enums"

export const supportWhisperSchema = z.object({
  whisperId: z.number(),
  whisper: z.string().min(1, "Whisper cannot be empty").max(500, "Whisper cannot exceed 500 characters"),
  responseCategory: z.enum(Object.values(ResponseCategory)),
})