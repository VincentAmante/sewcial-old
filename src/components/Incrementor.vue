<script lang="ts">

import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      if (count.value > 0) {
        count.value--;
      }
    };

    return { count, increment, decrement };
  }
};
</script>

<template>
    <div class="main">
      <button @click="decrement">-</button>
      <span> {{ count }}</span>
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
    padding: 5px 10px;
    font-size: 18px;
    background-color: $clr-accent-1;
    color: $clr-primary;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
span{
   padding: 5px 10px;
    font-size: 18px;
    background-color: white;
    color: $clr-secondary;
    border: none;
    border-radius: 5px;  
}
</style>
