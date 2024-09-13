<template>
    <div>
        <!-- <h2>Menu {{ $route.params.id }}</h2> -->
        <h2>{{ menu.name }}</h2>
        <div>
            <img :src="`/images/${menu.image}`" :alt="menu.name">
            <p>{{ menu.description }}</p>
        </div>

        <div class="ingredients">
            <router-link v-for="ingredient in menu.ingredients" :key="ingredient.slug" :to="{name: 'ingredient.show', params: {id: menu.id, slug: ingredient.slug}}">
                <ingredientList  :ingredient="ingredient"/>
            </router-link>
        </div>

    </div>
</template>

<script>
/*eslint-disable */
import menuData from '@/data.json'
import ingredientList from '@/components/ingredientList.vue';
import { computed } from 'vue';

    export default {

        props: {
            id: {
                type: Number,
                required: true
            }
        },

        components:{
            ingredientList
        },
        
        setup(props) {
            // const route = useRoute();

            // const menuId = computed(() => parseInt(route.params.id));

            const menu = computed(() => {
                return menuData.menus.find(menu => menu.id === props.id);
            });

            return {
                // id: props.id,
                menu
            };
        }
    }
</script>

<style scoped>
.ingredients{
    display: inline-flex;
    width: 420 px;
    height:225 px;
}
</style>