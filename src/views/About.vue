<template>
  <div>
    new blog who dis

  </div>
</template>

<script>
export default {
   data(){
        return{
            msg: ''
        }
    },
    mounted (){
      try{
        this.$store.dispatch('setPageTitle', 'About');
      }catch(err){
        
      }
    }
}
</script>
