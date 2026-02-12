<template>
  <div class="flex gap-1">
    <UIcon name="i-lucide-thumbs-up" size="xl" class="w-5 h-5 text-info" />
    <span>{{ likes }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  likes: number
}>();
</script>