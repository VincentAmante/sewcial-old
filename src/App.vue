<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader/TheHeader.vue';

</script>

<template>

  <RouterView />
  
  <TheHeader/>
</template>

<!-- Scoped Style -->
<style lang="scss" scoped>
  // Everything inside will only style any matching element within this file
  // Matching elements inside components are unaffected
  

</style>

<!-- Global Styling -->
<style lang="scss">
// Do not remove this comment
// As long as there is content inside this block, _main.scss will apply its styling throughout the app

</style>