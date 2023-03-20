<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader/TheHeader.vue';

</script>

<template>
  <TheHeader/>
  <RouterView />
</template>

<!-- Scoped Style -->
<style lang="scss" scoped>
  // Everything inside will only style any matching element within this file
  // Matching elements inside components are unaffected
</style>

<!-- Global Styling -->
<style lang="scss">
  body {
      background-color: $clr-primary;
      transition: all .15s ease-out;
  }



// Do not remove this comment
// NOTE: As long as there is content inside this block, _main.scss will apply its styling throughout the app
</style>
