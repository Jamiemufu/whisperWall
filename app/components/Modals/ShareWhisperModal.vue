<template>
  <UModal
    title="Share a whisper"
    class="bg-primary-100 rounded-2xl"
    :ui="{
      overlay: 'backdrop-blur-sm flex items-center justify-center p-4',
      content: 'max-w-2xl',
      header: 'border-0 items-center',
      title: 'text-2xl font-bold',
      body: 'pt-2!',
    }"
  >
    <template #body>
      <UForm class="pt-0!" :state="state" :schema="shareWhisperSchema" @submit="onSubmit">
        <div class="bg-white p-4 rounded-2xl mb-4">
          <UFormField
            label="Pick a Category"
            name="category"
            class="text-base"
            :ui="{
              label: 'font-bold',
            }"
          >
            <URadioGroup
              v-model="state.category"
              :items="categoriesRadioItems"
              size="xl"
              variant="table"
              required
              :ui="{
                label: 'capitalize',
                fieldset: 'py-4',
                item: 'items-center',
              }"
            >
              <template #label="{ item }">
                <div class="flex items-center justify-between gap-2">
                  {{ item.label }}
                  <UIcon :name="item.icon" class="text-primary h-5 w-5" />
                </div>
              </template>
            </URadioGroup>
          </UFormField>
        </div>
        <div class="bg-white p-4 rounded-2xl mb-4">
          <UFormField
            label="Enter your whisper"
            name="thought"
            class="text-base"
            :ui="{
              label: 'font-bold',
            }"
          >
            <UTextarea v-model="state.whisper" class="w-full text-base pt-2" placeholder="Enter your whisper here..." size="xl" :rows="5" required />
          </UFormField>
        </div>

        <UButton type="submit" variant="solid" color="neutral" block size="xl">Post Whisper</UButton>
      </UForm>
    </template>
  </UModal>
</template>
<script lang="ts" setup>
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
const toast = useToast()

const emits = defineEmits(["close"]);

type Schema = z.infer<typeof shareWhisperSchema>;

const state = reactive<Partial<Schema>>({
  category: undefined,
  whisper: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await $fetch("/api/whisper", {
      method: "POST",
      body: event.data,
    });
    // Emit the close event to close the modal
    emits("close");
    // Show a success toast notification
    toast.add({
      title: "Whisper posted!",
      description: "Your whisper has been shared on the wall.",
      color: "info",
      icon: "i-heroicons-check-circle-solid",
    });
  } catch (error) {
    toast.add({
      title: "Error posting whisper",
      description: "Something went wrong. Please try again.",
      color: "error",
      icon: "i-heroicons-x-circle-solid",
    });
  }
}
</script>
