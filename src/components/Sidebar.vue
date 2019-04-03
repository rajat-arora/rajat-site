<template>
     <div class="sidebar">
        <router-link to="/"><h2 class="sidebar-name">Rajat Arora</h2></router-link>
        <p>DevOps & Software Engineer.</p>
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
.sidebar-name{
    border-style: none;
    border-width: 0;
}
.sidebar-name:hover{
  color: #7ef1f9;
}
</style>
