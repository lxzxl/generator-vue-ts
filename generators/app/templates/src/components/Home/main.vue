<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h2>Internal Links</h2>
    <ul>
      <li><router-link :to="{ name: 'home', params: { userId: 123 }}">Home</router-link></li>
      <li><router-link :to="{ name: 'page1', params: { userId: 123 }}">Home/Page1</router-link></li>
      <li><router-link :to="{ name: 'page2', params: { userId: 123 }}">Home/Page2</router-link></li>
    </ul>
    <div class="pages">
      <router-view></router-view>
    </div>
    <hr>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/vue-class-component" target="_blank">vue-class-component</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>Typescript</h2>
    <ul>
      <li><a href="http://www.typescriptlang.org/docs/home.html" target="_blank">Typescript</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Hello extends Vue {
    message = 'Welcome to Your Vue.js App'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .pages{
    background: lightgrey;
  }
</style>
