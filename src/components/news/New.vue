<template>
  <div class="container">
   <ul>
     <li :key="content.id" v-for="content in tempNews">
        <div class="card" style="width: 18rem">
    
      <div class="card-body">
        <h5 class="card-title">{{content.title}}</h5>
        <p class="card-text">
          {{content.description}}
        </p>
        <a  :href="`${content.url}`" class="btn btn-primary">Go detail</a>
      </div>
    </div>
     </li>
   </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      tempNews:[],
    };
  },


  created(){
     // this.$store.dispatch("getNews");
     this.getNews();
     console.log("created")
    },

  methods: {
    ...mapActions(["newsList"]),
    getNews() {
      this.$http.get("").then((response) => {
        this.tempNews = response.data.articles;
        console.log('news',this.tempNews);
      });
    },
  },
  computed: {
    ...mapGetters({
      newsFromGetter: "getNews",
    }),
    ...mapMutations([
      "setNews"

    ]),
     news: {
           get(){
             return this.newsFromGetter
           },
           set(val){
             //newName
             this.news = val;
           } 
        },
  },
};
</script>