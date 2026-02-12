<template>
  <div class="flex gap-2 w-full justify-between items-center capitalize flex-row font-semibold flex-wrap">
    <div class="flex gap-2 items-center bg-white p-2 rounded-xl">
      <UIcon :name="CategoryToIcon[whisper.category]" size="xl" class="w-5 h-5 text-primary" />
      <p>{{ whisper.category }}</p>
    </div>
    <div class="flex items-center gap-3 bg-white p-2 rounded-xl">
      <WhisperLoves :loves="whisper.loves" :whisperId="whisper.id" />
      <WhisperSupports :supports="whisper.supports" :whisperId="whisper.id" />
      <WhisperLikes :likes="whisper.likes" :whisperId="whisper.id" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Whisper, Response } from '~~/prisma/generated/client/client';

interface Props {
whisper: Whisper & { responses: Response[] };
}

defineProps<Props>()
</script>