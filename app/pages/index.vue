<template>
  <UPageHero
    title="Whisper Wall"
    headline="100% anonymous, 100% supportive."
    description="A safe, anonymous space to share what’s on your mind — and get real support from people who care. No identities. No judgment. Just connection."
    :links="links"
  />

  <UPageSection title="Categories" description="Explore the different categories of thoughts and responses on Whisper Wall. Whether you're looking to share your own experiences or support others, there's a category for everyone.">
    <template #features>
      <UPageCard v-for="c in categories" :key="c" :title="c" icon="i-lucide-hand-helping" class="capitalize" />
    </template>
  </UPageSection>

  <UPageSection title="Responses" description="Explore the different categories of responses on Whisper Wall. Whether you're looking to share your own experiences or support others, there's a category for everyone.">
    <template #features>
      <UPageCard v-for="c in responseCategories" :key="c" :title="c" icon="i-heroicons-hand-raised-solid" class="capitalize" />
    </template>
  </UPageSection>
</template>
<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";
import { Category, ResponseCategory } from "~~/prisma/generated/client/enums";

const links = ref<ButtonProps[]>([
  {
    label: "Share a thought",
    to: "#",
    variant: "solid",
    size: "xl",
  },
  {
    label: "Support someone",
    to: "#",
    variant: "outline",
    size: "xl",
  },
]);

const categories = Object.values(Category);
const responseCategories = Object.values(ResponseCategory);
</script>
