import { Category, ResponseCategory } from "~~/prisma/generated/client/enums";

export const categoriesRadioItems = Object.values(Category).map((category) => {
  return {
    label: category,
    value: category,
    icon: CategoryToIcon[category]
  }
})

export const supportWhisperCategories = Object.values(ResponseCategory).map((responseCategory) => {
  return {
    label: responseCategory,
    value: responseCategory,
    icon: ResponseCategoryToIcon[responseCategory]
  }
});