<template>
    <div grid-list-md class="content avenir" v-if="!loadingApi">
            <ul v-for="(year, index) in groupedDates" :key="index" class="list" >
              <h3>{{ index }}</h3>
              <li v-for="post in year" :key="post.id" class="mb4-l mb3">
                <span>{{post.stringDate}}</span>
                <br>
                <router-link  v-bind:to="{ name: 'post', params: { id: post.id }}">{{ post.title }}</router-link>
              </li>
            </ul>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
     data() {
       return {
         groupedDates: {},
         loadingApi : true
       }

        
    },
    async mounted(){
      try{
        const posts = await axios.get("/posts");
        await posts.data.forEach(post =>{
          const date = new Date(parseInt(post.created_at))
          const year = date.getFullYear();
          const stringDate = date.toString().match("[A-Za-z ]+[0-9]{2} ")[0];
          if (year in this.groupedDates){
            this.groupedDates[year].push({
              id: post.id,
              title: post.title,
              stringDate,
              year
            })
          }else{
            this.groupedDates[year] = new Array({
              id: post.id,
              title: post.title,
              stringDate,
              year
            })
          }

        })
        this.$store.dispatch('setPageTitle','RAJAT ARORA');
        this.$store.dispatch('setImageHeader', 'https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80');
        this.loadingApi = false;
    

      }catch(err){
        throw err;
      }

    }
  }
</script>

<style scoped>
a{
   font-size: 1.9rem;
}
  .list{
    list-style-type: none !important;
    padding: 0;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  h3 {
    display: block;
    font-size: 2.17rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
@media screen and (min-width: 60em){
.mb4-l {
    margin-bottom: 2rem;
}
}
.mb3 {
    margin-bottom: 1rem;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
     margin-bottom: 1rem;
    margin-bottom: 2rem;

}
span{
  font-size: 1.1rem;
    color: #ccc;
    text-transform: uppercase;
    margin-right: .5rem;
    letter-spacing: .1em;
    font-weight: 700;

}


</style>
