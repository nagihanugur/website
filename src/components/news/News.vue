<template>
  <div class="container">
    <div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <input
            type="search"
            class="form-control"
            placeholder="Search News.."
            aria-label="Search"
            v-model="searchText"
          />
        </form>
      </div>
    </div>
    <!--- <ul  class="nav nav-pills flex-column mb-auto">
       <li v-for="newB in getNews" :key="newB" >
           {{newB.articles}}
       </li>
      </ul>  -->

    <app-new></app-new>
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