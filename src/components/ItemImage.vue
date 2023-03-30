<script setup lang="ts">
    // Variables passed to this component are props
    const props = defineProps({
        image: {
          type: String,
          required: true
        },
    })
</script>

<!-- Card -->
<template>
    <div class="cards">
          <div class="card-image" :style="{ backgroundImage: `url(${image})` }">
            <p class="description">
              <slot name="description"></slot>
            </p>
        </div>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
.cards {
    padding: .75em;
    margin:5px;
    .description {
        padding: 0.5rem 1rem 1rem 1rem;
    }
  
    // Images
    .card-image{
      aspect-ratio: 3 / 4;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 10px 10px 10px 10px;
      width: 100%;
      vertical-align: middle;

      transition: transform 0.5s;
    }
}
</style>