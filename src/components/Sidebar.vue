<template>
     <div v-bind:class="[$isMobile() ? sidebarMobile : sidebar]">
        <router-link to="/"><h1 class="sidebar-name">Rajat Arora</h1></router-link>
        <p>DevOps & Software Engineer.</p>
        <p>Currently: Exploring new challenges in the software industry.</p>
        <p> Follow me at  <a href="https://twitter.com/rajatonit">  <font-awesome-icon :icon="['fab', 'twitter']" /> twitter</a></p>
        <div v-bind:class="[$isMobile() ? navMobile : nav]">
        <router-link   to="/" class="btn">Home</router-link>
        <router-link  to="/about" class="btn" >About</router-link>
        <router-link  to="/projects" class="btn">Projects</router-link>
     </div>
    </div>
</template>
<script>
export default {
data() {
  return {
    nav: ['nav'],
    navMobile: ['nav-mobile'],
    sidebarMobile: ['sidebar-mobile'],
    sidebar: ['sidebar']
  }
}

}
</script>
<style>
.sidebar{
  border-left: 1px solid #0151ba;
  margin-top: 2rem;
  padding: 2rem;
}
.sidebar-mobile{
  border-bottom: 1px solid #0151ba;
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
}
.btn{
    text-decoration: none;
    border-bottom: 0px;
    background-color: #0151ba !important;
    font-weight: 700;
    font-size: 1.4rem;
    color: white;
    display: block;
    margin-bottom: .25rem;
    padding-top: 0;
    padding-left: .5rem;
}
.btn:hover{
  background-color: #7ef1f9 !important;
  border-bottom: 0px;
  text-decoration: none;

}
.btn::before{
    background-color: #7ef1f9 !important;

}
.nav{
    display: flex;
    flex-direction: column;
    text-align: left;
    
    
}
.nav-mobile{
    /* display: flex; */
    flex-direction: row;
    text-align: center;
}
.v-btn__content{
    font-size: 1.4rem;
}
.sidebar-name{
    border-style: none;
    border-width: 0;
}

</style>
