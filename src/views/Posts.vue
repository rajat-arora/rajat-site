<template>
<div class="avenir" v-if="!loading">
    <div id="date">  {{this.dateCreated}} </div>
    <div v-html="desc"> </div>
</div>
</template>

<script>
import axios from 'axios';
import { truncate } from 'fs';
var showdown  = require('showdown')

export default {
    data(){
        return{
            desc: '',
            dateCreated: '',
            loading: truncate
        }
    },
    async mounted(){
        try{
            const res = await axios.get(`https://opeak.ca/posts/${this.$route.params.id}`);
            const post = res.data;
            const date = new Date(parseInt(res.data.created_at));
            this.dateCreated = date.toString().match("[A-Za-z ]+[0-9]{2} ")[0] + ", " + date.getFullYear();
            const converter = new showdown.Converter();
            this.desc = converter.makeHtml(post.description);
            this.$store.dispatch('setPageTitle', post.title);
            const urlImage = res.data.img ? "https://opeak.ca" + res.data.img.url : 'https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80';
            this.$store.dispatch('setImageHeader', urlImage);

            this.loading =false;
        }catch (err){
            throw err;
        }
    }
}
</script>

<style>
#date{
     background-color: #0151ba;
    color: #fff;
    font-size: 0.85rem;
    font-weight:900;
    margin-top: 1rem;
    margin-bottom: 1rem;
     padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .25rem;
    padding-bottom: .25rem;
    display: inline-block;
}
img{
    border-style: none;
    width: 80%;
    height: 10% !important;
}
</style>
