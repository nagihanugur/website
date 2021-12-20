<template>
<div class="container">
     <div class=" px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Custom cards</h2>
    <app-new></app-new>

  
    

   

</div>

</div>
    
</template>
<script>
import New from "./New.vue"

export default {
    components : {

        "appNew" : New,
    }
    
}
</script>