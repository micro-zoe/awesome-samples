<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log('mounted')
  if (window.Worker) {
    const worker = new Worker('http://localhost:6616/worker.js')

    document.getElementById('start').addEventListener('click', () => {
      worker.postMessage('Hello!')
    })

    worker.onmessage = function (event) {
      console.log(`接收到: ${event.data}`)
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <h1>Hello, World!</h1>
    <button id="start">Start Worker</button>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
·
