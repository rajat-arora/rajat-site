<template>
  <div class="avenir" v-if="!loading">
    <div v-html="desc"> </div>
  </div>
</template>

<script>
import axios from 'axios';
var showdown  = require('showdown')

export default {
   data(){
        return{
            desc: '',
            loading: true
        }
    },
    async mounted (){
      try{
        const res = await axios.get(`https://api.rajatonit.com/projects/1`);
            const post = res.data;
            const converter = new showdown.Converter();
            this.desc = converter.makeHtml(post.desc);
            const urlImage = res.data.img ? "https://api.rajatonit.com" + res.data.img.url : 'https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80';
            this.$store.dispatch('setImageHeader', urlImage);
            this.$store.dispatch('setPageTitle', post.title);
            this.loading = false;
      }catch(err){
        throw err;
      }
    }
}
</script>
