<template>
  <div id="app">
    <header><a v-on:click="homepage()" style="color:#ffffff">-HOME-</a></header>
    <router-view/>
    <img src="./assets/pandabottom.png" width="100%"/>
  </div>
  
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue);
export default {
  name: 'App',
  methods: {
    homepage()
    {
      router.push({ name: "Page1"});
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  background: #222222;
  text-align: left;
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
}
</style>
