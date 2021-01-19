<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view/>
</template>

<script lang='ts'>
import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false)
    provide('abc', menuVisible)
  }
}
</script>
