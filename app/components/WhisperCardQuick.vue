<template>
  <UPageCard
    :title="whisper.content"
    variant="subtle"
    class="bg-primary-100/20 bg-[url(/img/clouds.png)] bg-top-left rounded-xl"
    :ui="{
      header: 'w-full',
      body: 'w-full',
      footer: 'flex gap-2 justify-between w-full flex-wrap',
    }"
  >
    <!-- header -->
    <template #header>
      <WhisperCategories :whisper="whisper" />
    </template>
    <!-- body -->
    <template #body>
      <WhisperContent :whisperContent="whisper.content" :whisperDate="whisper.createdAt" />
      <WhisperQuickReplies :responses="whisper.responses" :limit="2" />
    </template>
    <!-- footer -->
    <template #footer>
      <div class="flex gap-2 pt-2">
        <UButton variant="solid" size="md" @click="openViewModal(whisper.id)">View</UButton>
        <UButton variant="outline" size="md" color="neutral" @click="openModal(whisper.content, whisper.id)">Support</UButton>
      </div>
      <UButton variant="link" size="md" color="error" icon="i-lucide-circle-x">Report</UButton>
    </template>
  </UPageCard>
</template>
<script lang="ts" setup>
import type { Whisper, Response } from "~~/prisma/generated/client/client";
import SupportWhisperModal from "~/components/Modals/SupportWhisperModal.vue";
import ViewWhisperModal from "./Modals/ViewWhisperModal.vue";

defineProps<{
  whisper: Whisper & { responses: Response[] };
}>();

const overlay = useOverlay();
const supportModal = overlay.create(SupportWhisperModal);

function openModal(whisperContent: string, whisperId: number) {
  supportModal.open({ whisperContent, whisperId });
}

const whisperViewModal = overlay.create(ViewWhisperModal);

function openViewModal(whisperId: number) { 
  whisperViewModal.open({ whisperId }); 
}
</script>
