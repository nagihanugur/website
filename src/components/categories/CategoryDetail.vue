<template>
      <div class="container">
       
        <div class="card" style="width: 18rem" :key="content.id" v-for="content in detailNews">
          <img :src="content.urlToImage" class="card-img-top" >
    
      <div class="card-body">
        <h5 class="card-title">{{content.title}}</h5>
        <p class="card-text" >
          {{content.description}}
        </p>
        <a  :href="`${content.url}`" class="btn buton">Go detail</a>
      </div>
    </div>
    
  
  </div>
</template>
<script>
export default {

  data(){
    return{

      category : "",
      detailNews : [],

    }
  },
  
  created(){
     // this.$store.dispatch("getNews");
     //this.getNews(this.category);

   
    },
     mounted() {

   // this.getNews(this.category);

   
      this.$nextTick(function () {
    
      this.$http.get(`category=${this.category}`).then((response)=>{
        console.log(response);
        this.detailNews = response.body.articles;
        
      });
   })
  
    },
  watch : {

    "$route"(to,from){

      this.category = to.params.category;

    }
  },
  methods : {
    /* getNews(category){
      this.$http.get(`category=${category}`).then((response)=>{
        console.log(response);
        this.detailNews = response.body.articles;
        
      });
    },*/
  }


    
}
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