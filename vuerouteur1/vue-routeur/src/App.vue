<template>
  <HeaderNavigation/>
  <router-view/>
</template>

<script>

/* eslint-disable */
import HeaderNavigation from './components/headerNavigation.vue';

  export default{
    components:{
      HeaderNavigation
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  color: white;
  background-color: #2c3e50
}

.navbar-nav{
  display: flex;
  list-style-type: none;
  padding: 10px;
  gap: 20px;
}

.container-fluid{
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 10px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
