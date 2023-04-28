<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {HttpClient} from "@bianmaba/http-client";

HttpClient.post().form('/test', {a: 1})
HttpClient.get().do('/test1', {a: 1})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>