<template>
<div class="hero-image" v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.$store.state.imageHeader + ')' }">
  <div class="hero-home"> 
    <router-link to="/">RA</router-link>
  </div>
  <div class="hero-text">
    <h1>{{this.$store.state.pageTitle}}</h1>
    <!-- Photo by Reed Pearson on Unsplash -->
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
a{
   font-size: 1.9rem;
}
.hero-image {
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80"); */
  height: 60% !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
}

h1{
    font-weight: bold;
    font-size: 4rem;
    font-family: avenir next,avenir,sans-serif;
}

.hero-text {
  background-color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  color: black;
   padding-left: 2rem;
   padding-right: 2rem;
        padding-top: .5rem;
    padding-bottom: .5rem;
}
.hero-home{
    position: absolute;
    top: 1rem;
    display: block;
}
a{
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: .5rem;
    background-color: white;
}
 
</style>
