<template>
  <div class="container">
    <div
      class="d-flex flex-column flex-shrink-0 p-3 categories"
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
        <h1>Categories</h1>
      </a>
      <hr />
      <div class="">
        <ul  class=" list-group  ">
        <router-link
          tag="li"
          class="list-group-item"
          v-for="category in categories"
          :to="`/categories/${category}`"
          :key="category"
          
        >
        
         <a class="nav-link " aria-current="page">
            {{ category }}
        </a>
            
          
        </router-link>
      </ul>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapGetters} from "vuex";


export default {
 
  data() {
    return {};
  },
  methods: {
  
  },
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
};
</script>
<style scoped>

.categories{
  background-color:rgb(236, 236, 226);

  opacity: 2;
}
.categories h1{
  color:rgb(83, 74, 74); 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
ul li{
  
    background-color: rgb(83, 74, 74);
    padding: 5px;
    margin: 5px;
}
a{
  color: bisque;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
a:hover{
  color: black;
}
</style>