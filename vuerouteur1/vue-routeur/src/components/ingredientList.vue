<template>
    <div>
        <div class="card
        " style="width: 18rem;">
            <img :src="`/images/${ingredient.image}`" alt="ingredient.name" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ ingredient.name }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
    export default {
        props:{
            ingredient:{
                type: Object,
                Required: true
            }
        }
    }
</script>

<style scoped>

.card-img-top{
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.card{
    padding: 20px;
    margin: 15px;
    /* border: 1px solid gray; */
    border-radius: 7px;
    box-shadow: 0 0 15px 0px gray;
}

.card-img-top:hover{
    transform: scale(1.06);
}
</style>