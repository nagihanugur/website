<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <app-Header></app-Header>
      </div>
      <div class="col-md-3">
        <app-categories></app-categories>
      </div>

      <div class="col-md-9">
        <router-view></router-view>
      </div>
       

      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Categories from "./components/categories/Categories.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appCategories: Categories,
  },

  data(){

    return {

    }
  },

  methods : {

    

    
  }
};
</script>