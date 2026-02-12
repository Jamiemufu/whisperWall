export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params as { id: string };
    return getWhisperById(Number(id));
  } catch (error) {
    console.error("Error fetching whisper by ID:", error);
    throw createError({ 
      statusCode: 500, 
      message: "An error occurred while fetching the whisper."
    });
  }
});
