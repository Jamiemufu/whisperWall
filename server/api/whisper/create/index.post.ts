export default defineEventHandler(async (event) => {
  try {
    const { category, whisper, password } = await readValidatedBody(event, shareWhisperSchema.parse);

    let hashedPassword: string | undefined = undefined;

    if (password) {
      hashedPassword = await hashPassword(password);
    }

    return createWhisper(category, whisper, hashedPassword);
  } catch (error) {
    console.error("Error sharing whisper:", error);
    throw createError({
      statusCode: 400,
      message: "Failed to create. Please check your input and try again.",
    });
  }
});
