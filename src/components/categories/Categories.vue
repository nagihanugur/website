<template>
  <div class="container">
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style="width: 280px"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          link-dark
          text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">Categories</span>
      </a>
      <hr />
      <ul  class="nav nav-pills flex-column mb-auto">
        <router-link
          tag="li"
          class="nav-item active"
          v-for="category in categories"
          :to="`/categories/${category}`"
          :key="category"
        >
         <a class="nav-link " aria-current="page">
            {{ category }}
        </a>
            
          
        </router-link>
      </ul>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
};
</script>