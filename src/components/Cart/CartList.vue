<template>
  <div class="cart-list">
    <h1>Cart List</h1>
    <hr />
    <div :toCart="product"></div>
    <hr />
    <button>check out</button>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: ["toCart"],
};
</script>

<style>
.cart-list {
  min-width: 30%;
  height: 100%;
  border: 2px rgb(192, 7, 47) solid;
  /*   box-shadow: inset rgba(192, 7, 47, 0.9) 2px 3px 2px 5px;
 */
  background-color: rgba(192, 7, 47, 1);
  border: rgb(163, 162, 162) solid 3px;
  border-radius: 20px;
  margin-right: 10px;
  color: white;
  padding: 20px 5px;
}

.cart-list button {
  font-size: 18px;
  font-family: inherit;
  padding: 7px 7px;
  background-color: white;
  color: rgb(192, 7, 47);
  font-weight: bold;
  border: rgb(163, 162, 162) solid 3px;
  border-radius: 10px;
}

.cart-list button:hover {
  background-color: rgb(7, 80, 4);
  color: white;
  font-size: 22px;
}

.cart-list hr {
  margin: 10px 20px;
}
</style>