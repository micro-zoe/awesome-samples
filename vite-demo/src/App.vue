<script setup>
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
setInterval(() => {
  NProgress.start();
}, 1000);
</script>

<template>
  <div class="wrapper">
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
·
