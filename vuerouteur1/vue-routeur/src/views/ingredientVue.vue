<template>
    <div>
        <h2>{{ ingredient.name }}</h2>
        <div>
            <img :src="`/images/${ingredient.image}`" :alt="ingredient.name">
            <p>{{ ingredient.description }}</p>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
import menuData from '@/data.json'
import { computed } from 'vue';

    export default {

        props: {
            id: {
                type: Number,
                required: true
            },
            slug:{
                type: String,
                required: true
            }
        },

        setup(props) {
            const menu = computed(() => {
                return menuData.menus.find(menu => menu.id === props.id);
            });

            const ingredient = computed(() => {
                return menu.ingredients.find(ingredient => ingredient.slug === props.slug);
            });

            return {
                menu,
                ingredient
            };
        }
        
    }
</script>

<style scoped>

</style>