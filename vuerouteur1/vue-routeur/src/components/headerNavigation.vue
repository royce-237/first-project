<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/">Menu</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">

          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>  |
          </li>

          <li class="nav-item">
            <router-link to="/menu-mc-burger">McDonald</router-link>  |
          </li>

          <li class="nav-item">
            <router-link to="/menu-kfc-burger">KFC</router-link>  |
          </li>

          <li class="nav-item">
            <router-link to="/menu-bk-burger">Burger King</router-link>
          </li>

          <!-- <router-link v-for="menu in menus" :key="menu.id" :to="{name : 'menu.show', params:{id: menu.id, slug:menu.slug}}">
            <li>
              {{ menu.name }} |
            </li>
          </router-link> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
    export default {
        name : 'navigation'
    }
</script>

<style scoped>
  a.lien-actif{
    border-bottom: 5px solid green;
    border-radius: 2px;
    transition: 0.3s ease;
  }
</style>