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
    

    <div
      class="card"
      style="width: 18rem"
      :key="content.title"
      v-for="content in filtered"
    >
      <img :src="content.urlToImage" class="card-img-top" />

      <div class="card-body">
        <h5 class="card-title">{{ content.title }}</h5>
        <p class="card-text">
          {{ content.description }} 
        </p>
       
        <a :href="`${content.url}`" class="btn buton">Go detail</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
    //  products : ["monitor","bilgisayar"],
      tempNews: [],
      searchText: "",
    };
  },


  created() {
    // this.$store.dispatch("getNews");
    this.getNews();
    console.log("created");
  },

  methods: {
    ...mapActions(["newsList"]),
    ...mapMutations(["setNews"]),
    getNews() {
      this.$http.get("").then((response) => {
        this.tempNews = response.data.articles;
        console.log("news", this.tempNews);
      });
    },
   
  },
  computed: {
    ...mapGetters({
      newsFromGetter: "getNews",
    }),

    news: {
      get() {
        return this.newsFromGetter;
      },
      set(val) {
        //newName
        this.news = val;
      },
    },

    filtered() {
      return this.tempNews.filter((element) => {
        return element.title.toLowerCase().includes(this.searchText);
      });
    },
   
  },
};
</script>
<style scoped>
.card {
  float: left;
  display: inline-block;
  height: 450px;
  width: 350px;
  margin: 10px;
}
.card-text {
  height: 90px;
  overflow: hidden;
}
.card-title{
  font-size: 15px;
  
}


.buton{

  background-color:rgb(121, 109, 109); 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: bisque;

}
.buton:hover{
  background-color:rgb(236, 236, 226);
  color: rgb(121, 109, 109); 
}
</style>