<template>
  <div class="flex gap-1 cursor-pointer" @click="giveSupport">
    <UIcon name="i-lucide-hand-fist" size="xl" class="w-5 h-5 text-warning" />
    <span>{{ supports }}</span>
  </div>
</template>
<script lang="ts" setup>
import type { Whisper } from "~~/prisma/generated/client/client";

const props = defineProps<{
  supports: number;
  whisperId: number;
}>();

const supports = ref(props.supports);
const toast = useToast();

async function giveSupport() {
  try {
    await $fetch<Whisper>(`/api/whisper/supports`, {
      method: "PATCH",
      body: {
        whisperId: props.whisperId,
      },
    });

    supports.value += 1;
    toast.add({
      title: "Support Given",
      description: "You have given support to this whisper!",
      color: "info",
      icon: "i-lucide-hand-fist",
    });
  } catch (error) {
    console.error("Error giving support to whisper:", error);
    toast.add({
      title: "Error",
      description: "Failed to give support to this whisper. Please try again later.",
      color: "error",
      icon: "i-heroicons-x-solid",
    });
  }
}
</script>
