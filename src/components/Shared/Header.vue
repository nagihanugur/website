<template>
    <div class="container">
        
 <header>
    <div class="px-3 py-2  head">
      <div class="container">
        <div  class="d-flex flex-wrap align-items-center justify-content-center ">
        <router-link
        to="/"
        tag="h1"
        class="title"
        >THE NEWS</router-link>
        
        </div>
      </div>
    </div>
   
  </header>
    </div>
</template>
<script>

export default {

  data(){
    return{

      
    }
  },
 
    
}
</script>
<style scoped>

h1{
  color:rgb(236, 236, 226); 
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
}
.head{

  
  background-color:rgb(83, 74, 74); 
  
  height: 100px;
  padding: 5px;
}

</style>