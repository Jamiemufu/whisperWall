export default defineEventHandler(async (event) => {
  try {
    const whispers = await getWhispers(100);
    return whispers;
  } catch (error) {
    console.error("Error fetching whispers:", error);
    throw createError({
      statusCode: 500,
      message: "An error occurred while fetching whispers.",
    });
  }
});