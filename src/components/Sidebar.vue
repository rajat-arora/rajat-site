<template>
     <div class="sidebar">
        <router-link to="/"><h1 class="sidebar-name">Rajat Arora</h1></router-link>
        <p>DevOps & Software Engineer.</p>
        <p>Currently: Exploring new challenges in the software industry.</p>
        <p> Follow me at  <a href="#">  <font-awesome-icon :icon="['fab', 'twitter']" /> twitter</a></p>
     <div class="nav">
        <v-btn depressed  to="/" color="primary">Home</v-btn>
        <v-btn depressed to="/about"  color="primary">About</v-btn>
        <v-btn depressed to="/projects" color="primary">Projects</v-btn>
     </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.sidebar{
  border-left: 1px solid #0151ba;
  margin-top: 2rem;
  padding: 2rem;
}
.v-btn{
    text-decoration: none;
    border-bottom: 0px;

}
.nav{
    display: flex;
    flex-direction: column;
    text-align: left;
}
.v-btn__content{
    font-size: 1.4rem;
}
.sidebar-name{
    border-style: none;
    border-width: 0;
}
.sidebar-name:hover{
  color: #7ef1f9;
}
.v-btn {
    background-color: #0151ba !important;
}
</style>
