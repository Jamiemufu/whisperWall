<template>
  <UPageCard
    :title="whisper.content"
    variant="subtle"
    class="bg-primary-100/20 bg-[url(/img/clouds.png)] rounded-xl"
    :ui="{
      header: 'flex gap-2 w-full justify-between items-center capitalize flex-row font-semibold',
      body: 'w-full',
      footer: 'flex gap-2 justify-between w-full',
    }"
  >
    <!-- header -->
    <template #header>
      <div class="flex gap-2 items-center bg-white p-2 rounded-xl">
        <UIcon :name="CategoryToIcon[whisper.category]" size="xl" class="w-5 h-5 text-primary" />
        <p>{{ whisper.category }}</p>
      </div>
      <div class="flex items-center gap-3 bg-white p-2 rounded-xl">
        <WhisperLoves :loves="whisper.loves" :whisperId="whisper.id" />
        <WhisperSupports :supports="whisper.supports" :whisperId="whisper.id" />
        <WhisperLikes :likes="whisper.likes" :whisperId="whisper.id" />
      </div>
    </template>
    <!-- body -->
    <template #body>
      <WhisperContent :whisperContent="whisper.content" :whisperDate="whisper.createdAt" />
      <WhisperReplies :responses="whisper.responses" v-if="whisper.responses.length" />
    </template>
    <!-- footer -->
    <template #footer>
      <div class="flex gap-2 pt-2">
        <UButton variant="solid" size="md">View</UButton>
        <UButton variant="outline" size="md" color="neutral" @click="openModal(whisper.content, whisper.id)">Support</UButton>
      </div>
      <UButton variant="link" size="md" color="error" icon="i-lucide-circle-x">Report</UButton>
    </template>
  </UPageCard>
</template>
<script lang="ts" setup>
import type { Whisper, Response } from "~~/prisma/generated/client/client";
import SupportWhisperModal from "~/components/Modals/SupportWhisperModal.vue";
defineProps<{
  whisper: Whisper & { responses: Response[] };
}>();

const overlay = useOverlay();
const supportModal = overlay.create(SupportWhisperModal);

function openModal(whisperContent: string, whisperId: number) {
  supportModal.open({ whisperContent, whisperId });
}
</script>