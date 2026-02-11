<template>
  <UModal
    title="Share a whisper"
    class="bg-primary-100 rounded-2xl"
    :ui="{
      header: 'border-0 p-0 h-auto items-center',
      title: 'text-2xl font-bold',
      body: 'pt-2!'
    }"
  >
    <template #body>
      <UForm class="pt-0!">
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
              :items="categories"
              :ui="{
                label: 'text-base capitalize',
                fieldset: 'py-4 gap-3',
                item: 'items-center'
              }"
            />
          </UFormField>
        </div>
        <div class="bg-white p-4 rounded-2xl mb-4">
          <UFormField label="Enter your whisper" name="thought" class="text-base" :ui="{
            label: 'font-bold'
          }">
            <UTextarea class="w-full text-base pt-2" placeholder="Enter your whisper here..." />
          </UFormField>
        </div>
        
        <UButton type="submit" variant="solid" color="neutral" block size="xl">Post Whisper</UButton>
      </UForm>
    </template>
  </UModal>
</template>
<script lang="ts" setup>
import { Category } from "~~/prisma/generated/client/enums";

const categories = Object.values(Category).map((c) => {
  return {
    label: c,
    value: c,
  };
});
</script>
