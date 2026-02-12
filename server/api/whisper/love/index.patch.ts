export default defineEventHandler(async (event) => {
  try {
    const { whisperId } = await readValidatedBody(event, awardsSchema.parse);
    return giveWhisperLove(whisperId);
  } catch (error) {
    console.error("Error giving love to whisper:", error);
    throw createError({
      statusCode: 400,
      message: "Failed to give love to whisper. Please check your input and try again.",
    });
  }
});