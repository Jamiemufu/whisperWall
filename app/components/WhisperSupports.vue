<template>
  <div class="flex gap-1">
    <UIcon name="i-lucide-hand-fist" size="xl" class="w-5 h-5 text-warning" />
    <span>{{ supports }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  supports: number
}>();
</script>