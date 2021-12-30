<template>
  <div class="container">
    
    <!--- <ul  class="nav nav-pills flex-column mb-auto">
       <li v-for="newB in getNews" :key="newB" >
           {{newB.articles}}
       </li>
      </ul>  -->
    <div >
      <app-new ></app-new>
    </div>
    
  </div>
</template>
<script>
import New from "./New.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    appNew: New,
  },

  data() {
    return {
      searchText: "",
    };
  },

};
</script>
<style scoped>


</style>