<template>
  <div class="bg-white p-2 rounded-xl mt-2">
    <h2 class="font-semibold text-lg">{{ whisperContent }}</h2>
    <p class="text-sm text-gray-500 pt-2 italic">{{ formatDateShort(whisperDate) }}</p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  whisperContent: string;
  whisperDate: Date | string;
}>();
</script>