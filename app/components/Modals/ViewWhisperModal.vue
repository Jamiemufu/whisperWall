<template>
  <UModal
    title="View the whisper"
    class="bg-primary-100 bg-[url(/img/clouds.png)] bg-cover rounded-2xl"
    :ui="{
      overlay: 'backdrop-blur-sm flex items-center justify-center p-4',
      content: 'max-w-4xl w-content',
      header: 'border-0 items-center',
      footer: 'w-full flex justify-between gap-2',
      title: 'text-2xl font-bold',
      body: 'pt-2! flex flex-col gap-4',
    }"
  >
    <template #body>
      <div v-if="whisper">
        <WhisperCategories :whisper="whisper" />
        <WhisperContent
          :whisperContent="whisper.content"
          :whisperDate="whisper.createdAt"
        />
        <WhisperQuickReplies :responses="whisper.responses" />
      </div>
    </template>

    <template #footer>
      <div class="flex gap-2 pt-2">
        <UButton
          v-if="whisper"
          variant="outline"
          size="xl"
          color="neutral"
          @click="openSupportModal(whisper.id, whisper.content)"
        >
          Support</UButton
        >
      </div>
      <UButton variant="link" size="md" color="error" icon="i-lucide-circle-x"
        >Report</UButton
      >
    </template>
  </UModal>
</template>
<script lang="ts" setup>
import type { Whisper } from "~~/prisma/generated/client/client";
import SupportWhisperModal from "./SupportWhisperModal.vue";

interface Props {
  whisperId: number;
}

const props = defineProps<Props>();
const overlay = useOverlay();

const { data: whisper, refresh } = await useAsyncData(
  "whisper",
  () =>
    $fetch<Whisper & { responses: any[] }>(`/api/whisper/${props.whisperId}`),
  { immediate: true },
);

const supportModal = overlay.create(SupportWhisperModal);

function openSupportModal(whisperId: number, whisperContent: string) {
  const instance = supportModal.open({
    whisperId,
    whisperContent,
  });

  instance.result.then(() => {
    closeModal();
  });
}

function closeModal() {
  refresh();
  supportModal.close();
}
</script>
