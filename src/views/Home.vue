<template>
  <div class="home">
    <p id="#hello">Good shopping!</p>
  </div>
  <filter-bar @searchCategory="getProductByCategory" />
  <div class="home-body">
    <ProductList :products="products" @addToCart="addToCart" />
    <cart-list :cart="cart" />
  </div>
</template>

<script>
import ProductList from "../components/Products/ProductList.vue";
import FilterBar from "../components/layout/FilterBar.vue";
import CartList from "../components/Cart/CartList.vue";
import axios from "axios";
export default {
  name: "Home",
  components: { ProductList, FilterBar, CartList },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        this.products = res.data;

        console.log(res);
      });
    },
    getProductByCategory(category) {
      console.log(category);
      let categoryUrl = "";
      if (category) {
        categoryUrl = `https://fakestoreapi.com/products/category/${category}`;
      } else {
        categoryUrl = `https://fakestoreapi.com/products`;
      }
      axios.get(categoryUrl).then((res) => {
        this.products = res.data;

        console.log(res);
      });
    },
    addToCart(product) {
      this.cart.push(product);
    },
    /*  removeFromCart(cartItem) {
      this.cart.splice();
    }, */
  },
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
