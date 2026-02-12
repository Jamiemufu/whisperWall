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
  <UPageSection title="Most Recent Whispers" description="Help, motivate and support people in need with our most recent whispers">
    <UPageColumns>
      <WhisperCardQuick v-for="whisper in data" :key="whisper.id" :whisper="whisper" />
    </UPageColumns>
  </UPageSection>

  <ShareWhisperModal v-if="modal.isOpen" @close="modal.close()" />
</template>
<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";
import ShareWhisperModal from "~/components/Modals/ShareWhisperModal.vue";
import type { Whisper } from "~~/prisma/generated/client/client";

const { data } = await useAsyncData("whispers", () => $fetch<Whisper[]>("/api/whisper"), {
  immediate: true,
});

const links = ref<ButtonProps[]>([
  {
    label: "Create a whisper",
    variant: "solid",
    size: "xl",
    onClick: openModal,
  },
  {
    label: "Support someone",
    to: "#",
    variant: "solid",
    size: "xl",
    color: "primary",
  },
]);

const overlay = useOverlay();
const modal = overlay.create(ShareWhisperModal);

function openModal() {
  modal.open();
}
</script>
