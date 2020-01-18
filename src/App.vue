<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import config from './config.json'
export default {
  name: 'App',
  mounted() {
    document.title = config.title
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
</style>