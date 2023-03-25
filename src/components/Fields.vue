<script setup lang="ts">
  import { ref } from 'vue';
  const name = ref('');
</script>

<template>
<div class="form">
    <div class="field-1">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" placeholder="Type here" />
    </div>
    <!-- <h2>Hello, {{ name }}!</h2> -->
    <div class="field-2">
      <label for="paragraph">Review:</label>
      <textarea type="message" v-model="name" placeholder="Type multiple lines">
      </textarea>
    </div>
</div>
</template>


<style scoped lang="scss">
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.field-1{
    padding: 10px;
    align-items: center;
    display: flex;
}
.field-2{
    @extend .field-1;
    align-items: flex-start;
}
label{
    padding: 0 15px;
}
input{
    padding: 5px;
}
textarea{
    @extend input;
}
</style>

