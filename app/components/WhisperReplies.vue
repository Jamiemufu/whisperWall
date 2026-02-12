<template>
  <ul class="mt-2">
    <li v-for="response in responses" :key="response.id" class="flex flex-col justify-between w-full items-start gap-4 my-2 bg-white p-2 rounded-xl">
      <div class="flex gap-4 w-full">
        <p>{{ response.content }}</p>
        <UIcon :name="ResponseCategoryToIcon[response.category]" size="sm" class="w-5 h-5 text-primary shrink-0" />
      </div>
      <p class="text-sm text-gray-500 italic">{{ formatDateShort(response.createdAt) }}</p>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import type { Response } from "~~/prisma/generated/client/client";

defineProps<{
  responses: Response[];
}>();
</script>
