<template>
  <div class="home">
    <p>Good shopping!</p>
  </div>
  <filter-bar />
  <div class="home-body">
    <ProductList />
    <cart-list />
  </div>
</template>

<script>
import ProductList from "../components/Products/ProductList.vue";
import FilterBar from "../components/layout/FilterBar.vue";
import CartList from "../components/Cart/CartList.vue";
export default {
  name: "Home",
  components: { ProductList, FilterBar, CartList },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.home-body {
  display: flex;
}

.home {
  margin-top: 200px;
}
.home p {
  padding-top: 10px;
  font-size: 25px;
}
</style>
