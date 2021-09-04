<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created: function () {
    const instance = axios.create({
        baseURL: 'http://localhost:8080/',
    });

    instance.interceptors.response.use((response) => {
      if(response.status === 401) {
        this.$store.dispatch('logout')
      }
    });
  }
}
</script>

<style>

</style>
