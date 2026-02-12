export default defineEventHandler(async (event) => {
  try {
    const { whisper, responseCategory, whisperId } = await readValidatedBody(event, supportWhisperSchema.parse);

    return whisperReply(whisperId, whisper, responseCategory);
  } catch (error) {
    console.error("Error creating whisper reply:", error);
    throw createError({
      statusCode: 400,
      message: "Failed to create whisper reply. Please check your input and try again.",
    });
  }
});