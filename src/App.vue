<template>
 <div id="app">
  <Header> </Header>
  <v-container grid-list-md class="content">
      <v-layout row wrap v-if="!$isMobile()">
          <v-flex xs8>
            <router-view></router-view>
          </v-flex>
          <v-flex xs4>
            <Sidebar></Sidebar>
          </v-flex>
      </v-layout>
       <v-layout row wrap v-else>
           <v-flex xs12>
            <Sidebar></Sidebar>
          </v-flex>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
      </v-layout>
    </v-container>
    <!-- <Footer> </Footer> -->
</div>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
 body, html, #app {
    height: 100%;
    font-family: 'Karla', sans-serif;
    line-height: 1.5;
}
a {
    color: #0151ba;
    text-decoration: none;
    border-bottom: 3px solid #7ef1f9;
    padding-top: 15px;
    position: relative;
}

a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -3px;
    left: 0;
    background-color: #0151ba;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.1s ease-in-out 0s;
    transition: all 0.10s ease-in-out 0s;
}


a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1)
}

a.no-slide:hover:before {
    visibility: hidden
}

a.no-slide:hover {
    color: #7ef1f9
}

::selection {
    background-color: #7ef1f9;
    color: #0151ba;
}
</style>

