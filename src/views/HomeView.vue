<script setup lang="ts">

// import TheWelcome from '../components/TheWelcome.vue'
import LogoWhite from '@/components/icons/LogoWhite.vue';
import Experience from '@/Experience/Experience'
import { onMounted, ref, onBeforeUnmount } from 'vue';
import router from '@/router';
// Listens for a certain event where it then redirects to /about
// So far this seems to be the best way to handle ThreeJS -> Vue interactions
window.addEventListener(
  "triggerMessage", 
  (event) => {
    console.log('triggered')
    router.push({ name: 'about' })
  }
)

const experience = ref<Experience>()
onMounted(() => {
  const appElem: HTMLCanvasElement | null = document.querySelector('#canvas')
  if (appElem != null){
    experience.value = new Experience(appElem)
  }
})

// FIXME: Improve canvas unmount handling
/** Currently, this code is done because when you switch pages and then go back to home, the canvas is lost
 *  ideally, we don't want the Experience to load a long time, so if canvas-loading is getting too long, then consider alternatives */
onBeforeUnmount(() => {
  if (experience.value != null)
    experience.value.unmount()
})
</script>

<template>
  <main>
    <LogoWhite class="logo-white"></LogoWhite>
    <div class="canvas-wrapper">
      <canvas id="canvas"></canvas>
    </div>
  </main>
</template>

<style scoped lang="scss">

  main {
    overflow: hidden;
  }
  .canvas-wrapper {
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    z-index: -100;
  }
  canvas {
    width: 100%;
    height: 100%;
    background-color: $clr-secondary;
    pointer-events: initial;
  }

  .logo-white {
    position: absolute;
    padding-top: 50px;
    padding-left: 50px;
  }
</style>