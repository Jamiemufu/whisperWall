import * as z from "zod"
import { Category } from "~~/prisma/generated/client/enums"

export const shareWhisperSchema = z.object({
  whisper: z.string().min(1, "Whisper cannot be empty").max(500, "Whisper cannot exceed 500 characters"),
  category: z.enum(Object.values(Category)),
})