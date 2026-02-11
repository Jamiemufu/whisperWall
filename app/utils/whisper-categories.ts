import { Category } from "~~/prisma/generated/client/enums";

export const categoriesRadioItems = Object.values(Category).map((category) => {
  return {
    label: category,
    value: category,
    icon: CategoryToIcon[category]
  }
})