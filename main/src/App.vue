<script setup>
import { onMounted } from 'vue'
onMounted(() => {})
</script>

<template>
  <div class="wrapper">
    <micro-app
      class="{styles.app}"
      iframe
      name="app"
      url="http://localhost:6616/"
      router-mode="pure"
    ></micro-app>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
