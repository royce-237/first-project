<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <router-link v-for="menu in menus" :key="menu.id" :to="{name : 'menu.show', params:{id: menu.id, slug:menu.slug}}">
            <div class="col">
              <div class="card shadow-sm">
                <img :src="`/images/${menu.image}`" :alt="menu.name" width="420" height="225">

                <div class="card-body">
                  <h3>{{ menu.name }}</h3>
                </div>
              </div>
            </div>
          </router-link>

          <!-- <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <h3>Menu Burger</h3>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <h3>Menu Burger</h3>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <h3>Menu Burger</h3>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <h3>Menu Burger</h3>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <h3>Menu Burger</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <h3>Menu Burger</h3>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import menuData from '../data.json'
import { ref } from 'vue';

export default {
  setup() {
    const menus = ref(menuData.menus);

    return {
      menus
    };
  }
};

</script>

<style scoped>
  .row{
    display: flex;
    justify-content: space-evenly;
    /* flex-wrap: wrap; */
    text-align: center;
    align-items: center;
    width: 60%;
    margin: 20px auto;
    /* border: 1px solid; */
  }

  .col{
    background-color: #fff;
    margin: 20px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px gray;
    /* width: 100%; */
  }
  .card{
    border-radius: 10px;
  }

  .card-body{
    padding: 10px 0;
  }
</style>
