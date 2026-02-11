import * as z from "zod"
import { Category } from "~~/prisma/generated/client/enums"

export const shareWhisperSchema = z.object({
  thought: z.string().min(1, "Thought cannot be empty").max(500, "Thought cannot exceed 500 characters"),
  category: z.enum(Object.values(Category)),
})