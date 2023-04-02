<script setup lang="ts">

// Import download button icon
import ButtonDownload from './icons/ButtonDownload.vue';

// Variables passed to this component are props
const props = defineProps({
    alignment: {
        type: String,
        required: true,
        default: 'left'
    },

    image: {
        type: String,
        required: true
    }
})
</script>

<!-- Browse Image Card Templates -->
<template>
    <div class="cards-container">
        <div class="card">
          <div class="card-image" :style="{ backgroundImage: `url(${image})` }"></div>
            <div class="card-info-container">
                <div class="card-info" :class="alignment">
                    <div class="card-text">
                        <slot name="text"></slot>
                    </div>
                    <ButtonDownload></ButtonDownload>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.card {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.card-image {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card-info-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}

.card:hover .card-info-container {
  height: 50px;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: $clr-text;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

// .card-info.left {
//   justify-content: flex-start;
// }

// .card-info.right {
//   justify-content: flex-end;
// }

</style>