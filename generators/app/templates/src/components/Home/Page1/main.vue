<template>
  <div class="page1">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Hello extends Vue {
    message = 'This is page1'
  };
</script>
