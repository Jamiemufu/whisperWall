<template>
  <ul class="mt-2">
    <li v-for="response in responses" :key="response.id" class="flex justify-between w-full items-start gap-4 my-2 bg-white p-2 rounded-xl ">
      <p>{{ response.content }}</p>
      <UIcon :name="ResponseCategoryToIcon[response.category]" size="sm" class="w-5 h-5 text-primary shrink-0" />
    </li>
  </ul>
</template>
<script lang="ts" setup>
import type { Response } from "~~/prisma/generated/client/client";

defineProps<{
  responses: Response[];
}>();
</script>