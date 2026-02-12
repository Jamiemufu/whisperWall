<template>
  <div class="flex gap-1">
    <UIcon name="i-lucide-heart" size="xl" class="w-5 h-5 text-error" />
    <span>{{ loves }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  loves: number
}>();
</script>