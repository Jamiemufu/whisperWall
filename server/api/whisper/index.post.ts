export default defineEventHandler(async (event) => {
  try {
    const { category, whisper } = await readValidatedBody(event, shareWhisperSchema.parse);

    return createWhisper(category, whisper);
  } catch (error) {
    console.error("Error sharing whisper:", error);
    throw createError({
      statusCode: 400,
      message: "Failed to create. Please check your input and try again.",
    });
  }
});