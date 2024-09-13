<template>
  <div>
    <input 
      type="password" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="$t('enterPassword')"
      class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12 my-4"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputPassword',

  props: {
    modelValue: { type: String, required: true }
  },
});
</script>

<style scoped>
/* Ajoutez un style spécifique si nécessaire */
</style>
