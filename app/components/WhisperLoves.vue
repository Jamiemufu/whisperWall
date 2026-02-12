<template>
  <div class="flex gap-1 cursor-pointer" @click="giveLove">
    <UIcon name="i-lucide-heart" size="xl" class="w-5 h-5 text-error" />
    <span>{{ loves }}</span>
  </div>
</template>
<script lang="ts" setup>
import type { Whisper } from "~~/prisma/generated/client/client";

const props = defineProps<{
  loves: number;
  whisperId: number;
}>();

const loves = ref(props.loves);
const toast = useToast();

async function giveLove() {
  try {
    await $fetch<Whisper>(`/api/whisper/love`, {
      method: "PATCH",
      body: {
        whisperId: props.whisperId,
      },
    });

    loves.value += 1;
    toast.add({
      title: "Love Given",
      description: "You have given love to this whisper!",
      color: "info",
      icon: "i-heroicons-heart-solid",
    });
  } catch (error) {
    console.error("Error giving love to whisper:", error);
    toast.add({
      title: "Error",
      description: "Failed to give love to this whisper. Please try again later.",
      color: "error",
      icon: "i-heroicons-x-solid",
    });
  }
}
</script>
