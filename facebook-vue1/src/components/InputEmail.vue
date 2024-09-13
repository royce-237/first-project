<template>
  <div>
    <input 
      type="email" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="$t('enterMail')" ref="input"
      class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12"/>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';

export default defineComponent({
  name: 'InputEmail',

  props: {
    modelValue: { type: String, required: true }
  },

  setup(_, { emit }) {
    const input = ref<HTMLInputElement | null>(null);

    onMounted(() => {
      input.value?.focus();
    });

    return {
      input,
    };
  },
});
</script>

<style scoped>
/* Ajoutez un style spécifique si nécessaire */
</style>
