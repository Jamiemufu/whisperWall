<template>
  <UPageHero
    title="Whisper Wall"
    headline="100% anonymous, 100% supportive."
    description="A safe, anonymous space to share what’s on your mind — and get real support from people who care. No identities. No judgment. Just connection."
    :links="links"
  />

  <ShareWhisperModal v-if="modal.isOpen" @close="modal.close()" />
</template>
<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";
import ShareWhisperModal from "~/components/Modals/ShareWhisperModal.vue";

const links = ref<ButtonProps[]>([
  {
    label: "Share a thought",
    variant: "solid",
    size: "xl",
    onClick: openModal,
  },
  {
    label: "Support someone",
    to: "#",
    variant: "outline",
    size: "xl",
    color: "primary",
  },
]);

const overlay = useOverlay()
const modal = overlay.create(ShareWhisperModal)

function openModal() {
  modal.open()
}
</script>
