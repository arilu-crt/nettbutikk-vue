<template>
  <div
    class="filter-inputs"
    v-for="(category, index) in categories"
    :key="categories + index"
  >
    <label for="">{{ category }}</label>
    <input @click="filter" type="checkbox" name="" id="" />
  </div>
</template>

<script>
import axios from "axios";
import ProductListVue from "../Products/ProductList.vue";
export default {
  name: "FilterBar",
  props: ["products"],
  data: () => ({
    categories: [],
    unFiltered: [ProductListVue],
  }),

  created() {
    this.getCategories();
  },
  methods: {
    /*  filter() {
      this.ProductListVue.filter((product) => {
        products.categories;
      });
      this.unFiltered = this.filtered;
    }, */
    getCategories() {
      axios.get("https://fakestoreapi.com/products/categories").then((res) => {
        this.categories = res.data;

        console.log(res.data);
      });
    },
  },
  /* computed: {
    filtered: () => {
      return this.unFiltered.filter((product) => {
        return product.category === categories;
      });
    },
  }, */
};
</script>

<style>
.filter-inputs {
  display: inline-block;
}
.filter-inputs input {
  margin: 20px 30px 40px 30px;
}
.filter-inputs label {
  text-transform: capitalize;
  font-size: 18px;
}
</style>