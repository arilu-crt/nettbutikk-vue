<template>
  <div>
    <div
      class="filter-inputs"
      v-for="(category, index) in categories"
      :key="categories + index"
    >
      <button @click="searchCategory(category)">
        {{ category }}
      </button>
    </div>

    <button class="btn-alle" @click="searchCategory()">Vis alle</button>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "FilterBar",
  props: ["products"],
  data: () => ({
    categories: [],
  }),

  created() {
    this.getCategories();
  },
  methods: {
    searchCategory(category) {
      this.$emit("searchCategory", category);
    },
    getCategories() {
      axios.get("https://fakestoreapi.com/products/categories").then((res) => {
        this.categories = res.data;

        console.log(res.data);
      });
    },
  },
};
</script>

<style>
.filter-inputs {
  display: inline-block;
}
.filter-inputs button,
.btn-alle {
  margin: 20px 30px 40px 30px;
  text-transform: capitalize;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  color: white;
  background-color: rgb(192, 7, 47);
  padding: 10px;
  border-radius: 10px;
  border: rgb(163, 162, 162) solid 3px;
}
.filter-inputs button:hover,
.btn-alle:hover {
  background-color: white;
  color: rgb(192, 7, 47);
}
</style>