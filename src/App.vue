<template>
 <div id="app">
  <Header> </Header>
  <v-container grid-list-md class="content avenir">
      <v-layout row wrap>
          <v-flex xs8>
            <router-view></router-view>
          </v-flex>
          <v-flex xs4>
            <Sidebar></Sidebar>
          </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
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
}
::selection {
    background-color: #7ef1f9;
    color: #0151ba;
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
.avenir {
    font-family: avenir next,avenir,sans-serif;
    line-height: 1.5;

}

</style>

