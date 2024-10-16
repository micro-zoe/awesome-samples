<template>
    <micro-app v-bind="appConfig" />
  </template>
  <script setup lang="ts">
import { reactive } from 'vue';

const appConfig = reactive({
    baseroute: `/`,
    iframe: true,
    name: 'home',
    url: 'http://localhost:9501/',
  })
  </script>
  