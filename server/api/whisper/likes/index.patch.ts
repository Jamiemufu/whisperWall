export default defineEventHandler(async (event) => {
  try {
    const { whisperId } = await readValidatedBody(event, awardsSchema.parse);
    return giveWhisperLikes(whisperId);
  } catch (error) {
    console.error("Error giving likes to whisper:", error);
    throw createError({
      statusCode: 400,
      message: "Failed to give likes to whisper. Please check your input and try again.",
    });
  }
});