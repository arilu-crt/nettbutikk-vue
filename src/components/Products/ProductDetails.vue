<template>
  <div class="product-details">
    <h1>{{ products.title }}</h1>
    <img :src="products.image" alt="" class="product-image" />
    <p>
      <strong>${{ products.price }}</strong> - {{ products.category }}
    </p>
    <p>{{ products.description }}</p>
  </div>
  <div class="back">
    <router-link :to="{ name: 'Home' }">Back to all Products >> </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetails",
  data() {
    return {
      products: {},
      message: "",
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.getProductDetails(this.$route.params.id);
  },
  methods: {
    getProductDetails(id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          this.products = res.data;
          console.log(res);
        })
        .catch(() => {
          this.message = "This product was not found";
        });
    },
  },
};
</script>

<style>
.product-details {
  margin: 200px auto auto auto;
  width: 40%;
}

.product-details p {
  font-size: 20px;
}

.back a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.back a:hover {
  color: rgb(192, 7, 47);
}
</style>