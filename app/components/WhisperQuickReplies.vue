<template>
  <div class="flex w-full flex-row gap-4">
    <USeparator orientation="vertical" class="h-auto mt-4 mb-4 ml-4" />
    <WhisperReplies :responses="responsesLimited" v-if="responses.length" />
  </div>
</template>
<script lang="ts" setup>
import type { Response } from "~~/prisma/generated/client/client";
const props = defineProps<{
  responses: Response[];
  limit?: number;
}>();

const responsesLimited = computed(() => {
  if (props.limit) {
    return props.responses.slice(0, props.limit);
  }
  return props.responses;
});
</script>
