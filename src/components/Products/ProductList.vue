<template>
  <div class="product-list">
    <div
      class="product-card"
      v-for="(product, index) in products"
      :key="product + index"
    >
      <img :src="product.image" alt="" class="product-image" />
      <p class="product-title">{{ product.title }}</p>
      <p class="product-price">${{ product.price }}</p>
      <router-link :to="`/products/${product.id}`">Details >></router-link>

      <button class="btn-tocart" @click="addToCart(product)">
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ["products"],

  data: () => ({
    /* favouriteProd: true, */
  }),
  methods: {
    isFavourite() {},
    addToCart(product) {
      this.$emit("addToCart", product);
    },
  },
};
</script>

<style>
.product-image {
  max-height: 250px;
  max-width: 250px;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}

.product-card {
  width: 30%;
  margin: 50px 30px;
}

.product-card a {
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-size: 18px;
}

.product-card a:hover {
  font-size: 22px;
  font-weight: bold;
}

.product-title {
  font-size: 20px;
}

.product-price {
  font-weight: bold;
  font-size: 19px;
}

.btn-tocart {
  font-size: 18px;
  font-family: inherit;
  padding: 7px 7px;
  background-color: rgb(192, 7, 47);
  color: white;
  font-weight: bold;
  border: rgb(163, 162, 162) solid 3px;
  border-radius: 10px;
}

.btn-tocart:hover {
  background-color: rgb(7, 80, 4);
  font-size: 22px;
}
</style>