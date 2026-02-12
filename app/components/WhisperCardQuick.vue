<template>
  <UPageCard
    :title="whisper.content"
    variant="subtle"
    class="bg-primary-300/20"
    :ui="{
      header: 'flex gap-2 w-full justify-between items-center capitalize flex-row',
      footer: 'flex gap-2',
    }"
  >
    <template #header>
      <div class="flex gap-2 items-center">
        <UIcon :name="CategoryToIcon[whisper.category]" size="xl" class="w-5 h-5 text-primary" />
        <p>{{ whisper.category }}</p>
      </div>
      <div class="flex items-center gap-3">
        <WhisperLoves :loves="whisper.loves" />
        <WhisperSupports :supports="whisper.supports" />
        <WhisperLikes :likes="whisper.likes" />
      </div>
    </template>
    <template #body>
      <h2 class="font-bold text-lg">{{ whisper.content }}</h2>
      <p class="text-sm text-gray-500 pt-2 italic">{{ formatDateShort(whisper.createdAt) }}</p>
    </template>
    <template #footer>
      <UButton variant="outline" size="lg" color="primary">View</UButton>
      <UButton variant="solid" size="lg" color="primary">Support</UButton>
    </template>
  </UPageCard>
</template>
<script lang="ts" setup>
import type { Whisper } from "~~/prisma/generated/client/client";
defineProps<{
  whisper: Whisper;
}>();
</script>
  