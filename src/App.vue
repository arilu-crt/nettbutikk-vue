<template>
  <NavBar />

  <router-view />
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
#app {
  /*   font-family: Avenir, Helvetica, Arial, sans-serif;
 */
  font-family: "Courier New", Courier, monospace;

  /*  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  margin: 0;
  padding: 0;
}
</style>
