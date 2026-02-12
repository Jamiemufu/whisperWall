import * as z from "zod"

export const awardsSchema = z.object({
  whisperId: z.number(),
})