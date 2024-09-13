<template>
  <!-- <div class="min-h-screen flex flex-col items-center justify-between"> -->
    
    <div class="flex flex-col items-center justify-center my-2 w-full sm:w-96 sm:my-auto">
      <div>
        <h2 class="text-blue-600 text-center my-2 text-4xl font-bold">Facebook</h2>
      </div>

      <form @submit.prevent="loginSubmit" class="flex-col items-center justify-center bg-white w-11/12 shadow-sm shadow-gray-500">

        <h3 class="text-center my-4 text-2xl">{{ $t('facebook') }}</h3>

        <InputEmail v-model="email" class="text-center"/>
        <span v-if="v$.email.$error" class=" flex flex-col text-red-500">
          <span v-if="v$.email.required.$invalid" class="mx-auto">{{ $t('email') }}</span>
          <span v-if="v$.email.email.$invalid" class="mx-auto">{{ $t('format') }}</span>
        </span>

        <InputPassword v-model="password" class="text-center"/>
        <span v-if="v$.password.$error" class="flex flex-col text-red-500 justify-center" >
          <span v-if="v$.password.required.$invalid" class="mx-auto">{{ $t("passwordError") }}</span>
          <span v-if="v$.password.minLength.$invalid" class="mx-auto">{{ $t('passwordLength') }}</span>
          <span v-if="v$.password.hasSymbol?.$invalid">{{ $t('passwordSymbol') }}</span>
        </span>

        <ButtonSubmit class="text-center"/>

        <p v-if="error" class="text-red-500 justify-center">{{ error }}</p>

        <router-link to="/password">
          <p class="text-center text-balance text-blue-700 cursor-pointer">{{ $t('passwordForgot') }}</p>
        </router-link>

        <div class="flex justify-around items-center text-gray-00 m-4">
          <hr class="w-full">
          <p class="mx-2">{{ $t('or') }}</p>
          <hr class="w-full">
        </div>

        <router-link to="/newAccount">
          <div class="bg-green-500 py-4 rounded-xl hover:bg-green-600 w-11/12 mx-auto my-5">
            <p class="text-center text-white font-bold text-lg">{{ $t('newAccount') }}</p>
          </div>
        </router-link>
      </form>
    </div>

    <!-- <footer class="w-full text-gray-400 text-center p-8 bg-white">
      <small>{{ $t('footer') }}</small>
    </footer> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email as emailValidator, minLength } from '@vuelidate/validators';
import InputEmail from '@/components/InputEmail.vue';
import InputPassword from '@/components/InputPassword.vue';
import ButtonSubmit from '@/components/ButtonSubmit.vue';

export default defineComponent({
  name: 'Login',
  components: {
    InputEmail,
    InputPassword,
    ButtonSubmit,
  },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const error = ref<string>('');
    const router = useRouter();

    const rules = {
      email: { required, email: emailValidator },
      password: {
        required,
        minLength: minLength(6),
        hasSymbol: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
      },
    };

    const v$ = useVuelidate(rules, { email, password });

    const loginSubmit = () => {
      v$.value.$touch();

      if (!v$.value.$invalid) {
        router.push('/loginSuccess');
        console.log('Email:', email.value, 'Password:', password.value);
      } else {
        error.value = 'Veuillez corriger les erreurs avant de soumettre.';
      }
    };

    return {
      email,
      password,
      error,
      v$,
      loginSubmit,
    };
  },
});
</script>

<style scoped>
.error {
  color: red;
}
</style>
