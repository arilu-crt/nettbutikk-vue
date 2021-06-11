<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home </router-link>
    <router-link :to="{ name: 'About' }">| About |</router-link>
    <router-link :to="{ name: 'Favourites' }">Favourites</router-link>
    <div class="header">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      message: "Vue & Shop",
    };
  },
};
</script>

<style>
#nav {
  background-color: rgb(192, 7, 47);
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0 10px 0;
  font-weight: bold;
  border-bottom: 4px solid rgb(163, 162, 162);
}

#nav a {
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
}
#nav a.router-link-exact-active {
  color: rgb(163, 162, 162);
}

.header {
  color: white;
  width: 100%;
  font-size: 25px;
}
</style>