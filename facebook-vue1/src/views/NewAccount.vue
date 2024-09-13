<template>
    <div>
        <h2 class="text-xl my-8">Enter Informations for your new account</h2>
        <form @submit.prevent="addUser" class="bg-white w-full shadow-xl">

            <div class="flex flex-col justify-center items-center">

                <div>
                    <input type="text" name="firstName" class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12 m-3" placeholder="First name" v-model="newUser.firstName">
                    <span v-if="v$.firstName.$error" class="text-red-400 text-center">
                        <span v-if="v$.firstName.required.$invalid" class="text-center">First name required.</span>
                    </span>
    
                    <input type="text" name="lastName" class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12 m-3" placeholder="Last name" v-model="newUser.lastName">
                    <span v-if="v$.lastName.$error" class="text-red-400">
                        <span v-if="v$.lastName.required.$invalid">Last name required.</span>
                    </span>
                </div>

                <input type="email" name="email" class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12 m-3" placeholder="Email" v-model="newUser.email">
                <span v-if="v$.email.$error" class="text-red-400">
                    <span v-if="v$.email.required.$invalid">{{ $t('email') }}</span>
                    <span v-if="v$.email.email.$invalid">{{ $t('format') }}</span>
                </span>

                <input type="password" name="password" class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12 m-3" placeholder="Password" v-model="newUser.password">
                <span v-if="v$.password.$error" class="flex flex-col text-red-500 justify-center" >
                    <span v-if="v$.password.required.$invalid" class="mx-auto">{{ $t("passwordError") }}</span>
                    <span v-if="v$.password.minLength.$invalid" class="mx-auto">{{ $t('passwordLength') }}</span>
                    <span v-if="v$.password.hasSymbol?.$invalid" class="mx-auto">{{ $t('passwordSymbol') }}</span>
                </span>

                <input type="password" name="confirmPassword" class="border border-gray-500 rounded text-lg focus:outline-none focus:border-sky-600 p-1 w-11/12 m-3" placeholder="Confirm password" v-model="newUser.confirmPassword">
                <span v-if="v$.password.$error" class="text-red-400">
                    <span v-if="v$.password.required.$invalid">{{ $t("passwordError") }}</span>
                    <span v-if="v$.password.minLength.$invalid && v$.password.hasSymbol?.$invalid">Le mot de passe ne correspond pas a celui entree</span>
                </span>

                <div class="bg-green-500 py-4 rounded-xl hover:bg-green-600 w-11/12 mx-auto my-5 text-center text-white font-bold text-lg">
                    <input type="submit" value="Create">
                </div>
            </div>

        </form>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { email, minLength, required, sameAs } from '@vuelidate/validators';
import { reactive, ref } from 'vue';

export default {
    setup() {
        const userAccount = ref([]);

        const newUser = reactive({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        const rules = {
            firstName: { required },
            lastName: { required },
            email: { required, email },
            password: {
                required,
                minLength: minLength(6),
                hasSymbol: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
            },
            confirmPassword: {
                required,
                sameAs: sameAs(() => newUser.password)
            }
        };

        const v$ = useVuelidate(rules, newUser);

        const addUser = () => {
            v$.value.$touch();

            if (!v$.value.$invalid) {
                userAccount.value.push({ ...newUser });

                newUser.firstName = '';
                newUser.lastName = '';
                newUser.email = '';
                newUser.password = '';
                newUser.confirmPassword = '';

                localStorage.setItem('userAccount', JSON.stringify(userAccount.value));
            }
        };

        return {
            newUser,
            v$,
            addUser
        };
    }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
