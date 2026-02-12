<template>
  <UPageHero
    title="Whisper Wall"
    headline="100% anonymous, 100% supportive."
    description="A safe, anonymous space to share what’s on your mind — and get real support and motivation from people who care. No identities. No judgment. Just connection."
    :links="links"
    class="bg-[url(/img/clouds.png)] bg-cover bg-center"
    :ui="{
      headline: 'text-primary-700 text-lg',
      description: 'text-normal',
    }"
  />
  <UPageSection
    title="Recent Whispers"
    description="Help, motivate and support people in need with our most recent whispers"
  >
    <UPageColumns>
      <WhisperCardQuick
        v-for="whisper in whispers"
        :key="whisper.id"
        :whisper="whisper"
        @refresh="refresh"
      />
    </UPageColumns>
  </UPageSection>

  <ShareWhisperModal
    v-model:open="isModalOpen"
    @close="closeModal"
    @created="refresh"
  />
</template>
<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";
import ShareWhisperModal from "~/components/Modals/ShareWhisperModal.vue";
import type { Whisper, Response } from "~~/prisma/generated/client/client";

const { data: whispers, refresh } = await useAsyncData(
  "whispers",
  () => $fetch<(Whisper & { responses: Response[] })[]>("/api/whisper"),
  { immediate: true },
);

const isModalOpen = ref(false);

const links = ref<ButtonProps[]>([
  {
    label: "Create a whisper",
    variant: "solid",
    size: "xl",
    onClick: () => {
      openModal();
    },
  },
]);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>
