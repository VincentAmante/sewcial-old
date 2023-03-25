<script setup lang="ts">

import { ref } from 'vue';

const initialValue = 0;
const currentValue = ref(initialValue);

// function increments count
function increment() {
  currentValue.value++;
}

// function decrements count
function decrement() {
  if (currentValue.value > 0){
  currentValue.value--;
  }
}
</script>

<template>
    <div class="main">
      <button @click="decrement">-</button>
      <h3><slot name="count"> {{ currentValue }}</slot></h3>
      <button @click="increment">+</button>
    </div>
  </template>
  
<style scoped lang="scss">
.main{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
button {
  padding: 10px 25px;
    font-size: 25px;
    background-color: $clr-accent-1;
    color: $clr-primary;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
h3{
   padding: 10px 25px;
    font-size: 25px;
    background-color: white;
    color: $clr-secondary;
    border: none;
    border-radius: 5px;  
}
</style>
