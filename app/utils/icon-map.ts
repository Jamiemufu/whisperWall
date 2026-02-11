import { Category, ResponseCategory } from "~~/prisma/generated/client/enums";

export const CategoryToIcon: Record<Category, string> = {
  [Category.stress]: "i-lucide-brain",
  [Category.relationship]: "i-lucide-heart",
  [Category.work]: "i-lucide-briefcase",
  [Category.family]: "i-lucide-home",
  [Category.motivation]: "i-lucide-rocket",
  [Category.purpose]: "i-lucide-compass",
  [Category.life]: "i-lucide-sun",
  [Category.finance]: "i-lucide-wallet",
  [Category.health]: "i-lucide-activity",
  [Category.other]: "i-lucide-circle-dot"
}

export const ResponseCategoryToIcon: Record<ResponseCategory, string> = {
  [ResponseCategory.advice]: "i-lucide-lightbulb",
  [ResponseCategory.empathy]: "i-lucide-heart-handshake",
  [ResponseCategory.encouragement]: "i-lucide-thumbs-up",
  [ResponseCategory.humor]: "i-lucide-smile",
  [ResponseCategory.perspective]: "i-lucide-eye",
  [ResponseCategory.validation]: "i-lucide-check-circle",
  [ResponseCategory.support]: "i-lucide-life-buoy",
  [ResponseCategory.resources]: "i-lucide-book-open",
  [ResponseCategory.motivation]: "i-lucide-flame",
  [ResponseCategory.other]: "i-lucide-more-horizontal"
}