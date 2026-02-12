export default defineEventHandler(async (event) => {
  try {
    const { whisperId } = await readValidatedBody(event, awardsSchema.parse);
    return giveWhisperSupports(whisperId);
  } catch (error) {
    console.error("Error giving supports to whisper:", error);
    throw createError({
      statusCode: 400,
      message: "Failed to give supports to whisper. Please check your input and try again.",
    });
  }
});