<script setup lang="ts">

// import TheWelcome from '../components/TheWelcome.vue'
import LogoWhite from '@/components/icons/LogoWhite.vue';
import Experience from '@/Experience/Experience'
import { onMounted } from 'vue';

onMounted(() => {
  const appElem: HTMLCanvasElement | null = document.querySelector('#canvas')
  console.log(appElem)
  if (appElem != null){
    const experience = new Experience(appElem)
  }
})
</script>

<template>
  <main>
    <LogoWhite class="logo-white"></LogoWhite>
    <canvas id="canvas"></canvas>
  </main>
  
</template>

<style lang="scss">
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -100;
  }

  body {
    background-color: $clr-secondary;
  }

  .logo-white {
    position: absolute;
    padding-top: 50px;
    padding-left: 50px;
  }
</style>