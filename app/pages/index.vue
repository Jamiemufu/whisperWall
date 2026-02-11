<template>
  <UPageHero
    title="Whisper Wall"
    headline="100% anonymous, 100% supportive."
    description="A safe, anonymous space to share what’s on your mind — and get real support from people who care. No identities. No judgment. Just connection."
    :links="links"
  />

  <ShareThought v-if="modal.isOpen" @close="modal.close()" />
</template>
<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";
import ShareThought from "~/components/ShareThought.vue";

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
  },
]);

const overlay = useOverlay()
const modal = overlay.create(ShareThought)

function openModal() {
  modal.open()
}
</script>
