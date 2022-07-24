<template>
  <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script setup lang="ts">
export interface Prop {
  poster: string
}

const defaultPosterBg = 'linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)'
const props = defineProps<Prop>();

const posterBG = computed(() => props.poster ? `url(${props.poster})` : defaultPosterBg)
const posterStyle = computed(() => {
  return {
    "background-image": `${posterBG.value}`
  }
})

</script>

<style scoped>
body {
  position: relative;
}

.poster-page-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
  z-index: -1;
}

.poster-page-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
}
</style>