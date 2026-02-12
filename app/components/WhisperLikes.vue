<template>
  <div class="flex gap-1 cursor-pointer" @click="giveLikes">
    <UIcon name="i-lucide-thumbs-up" size="xl" class="w-5 h-5 text-info" />
    <span>{{ likes }}</span>
  </div>
</template>
<script lang="ts" setup>
import type { Whisper } from "~~/prisma/generated/client/client";

const props = defineProps<{
  likes: number;
  whisperId: number;
}>();

const likes = ref(props.likes);
const toast = useToast();

async function giveLikes() {
  try {
    await $fetch<Whisper>(`/api/whisper/likes`, {
      method: "PATCH",
      body: {
        whisperId: props.whisperId,
      },
    });

    likes.value += 1;
    toast.add({
      title: "Like Given",
      description: "You have given a like to this whisper!",
      color: "info",
      icon: "i-lucide-thumbs-up",
    });
  } catch (error) {
    console.error("Error giving likes to whisper:", error);
    toast.add({
      title: "Error",
      description: "Failed to give likes to this whisper. Please try again later.",
      color: "error",
      icon: "i-heroicons-x-solid",
    });
  }
}
</script>
