<template>
  <div class="cart-list">
    <h1>Cart List</h1>
    <hr />
    <div class="cart-item" v-for="cartItem in cart" :key="cartItem">
      <div class="cart-part">
        <img :src="cartItem.image" alt="" />
      </div>
      <div class="cart-part">
        <p>{{ cartItem.title }}</p>
        <p>${{ cartItem.price }}</p>
        <label for="quantity">Quantity</label>
        <input type="number" name="" id="quantity" min="1" value="1" />
      </div>
      <button @click="cart.splice(index, 1)" class="btn-cart-remove">
        remove
      </button>
    </div>

    <hr />
    <button class="check-out">check out</button>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: ["cart"],
  methods: {},
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

.check-out {
  font-size: 18px;
  font-family: inherit;
  padding: 7px 7px;
  background-color: white;
  color: rgb(192, 7, 47);
  font-weight: bold;
  border: rgb(163, 162, 162) solid 3px;
  border-radius: 10px;
}

.check-out:hover {
  background-color: rgb(7, 80, 4);
  color: white;
  font-size: 22px;
}

.cart-list hr {
  margin: 10px 20px;
}
.cart-item {
  width: 70%;
  text-align: left;
  margin: 40px auto;
  display: flex;
  font-weight: bold;
}

.cart-item img {
  max-height: 100px;
  max-width: 100px;
  margin-right: 20px;
  border-radius: 10px;
}

.cart-item input {
  width: 20%;
  border-radius: 7px;
  padding: 5px;
  margin-left: 5px;
  font-size: 14px;
}

.btn-cart-remove {
  height: 50px;
  align-self: center;
  margin-left: 5%;
  font-size: 18px;
  font-family: inherit;
  padding: 7px 7px;
  background-color: white;
  color: rgb(192, 7, 47);
  font-weight: bold;
  border: rgb(163, 162, 162) solid 3px;
  border-radius: 10px;
}

.btn-cart-remove:hover {
  height: 55px;
  background-color: rgb(192, 7, 47);
  color: white;
}
</style>