<script setup lang="ts">
    // Import download button
    import DownloadButton from '@/components/DownloadButton.vue';
    
    // Variables passed to this component are props
    const props = defineProps({
        image: {
          type: String,
          required: true
        }
    })
</script>

<!-- Card -->
<template>
    <div class="cards" onclick="location.href='html/image.html'">
        <div class="card">
          <div class="card-image" :style="{ backgroundImage: `url(${image})` }"></div>
        <div class="card-info">
            <h1>
              <slot name="item-name"></slot>
            </h1>
            <h3>
              <slot name="owner"></slot>
            </h3>
            <p>
              <slot name="description"></slot>
            </p>
            <DownloadButton></DownloadButton>
        </div>
        </div>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
.cards {
    margin: 10px;
    
    .card {
      flex-direction: column;
      color: $clr-text;
      background-color: $clr-primary;
      width: 180px; // change this depending on the thign
      height: 300px;
      border-radius: 15px;

      @include media(desktop) {
        width: 260px;
        height: 370px;
      }
  
      &:hover {
        cursor: pointer;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        
        .card-image {
          filter: brightness(100%);

        }
      }
    }
  
    // Content
    .card-info {
      flex-direction: column;
      padding: 1rem;
      justify-content: center;

      h1, h3 {
        margin: 0;
      }
    }
  
    // Images
    .card-image{
      aspect-ratio: 1.1 / 1;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 15px 15px 0px 0px;
      width: 100%;
      vertical-align: middle;
      filter: brightness(80%);

    }
  }
  
</style>