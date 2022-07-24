<template>
  <div class="poster-page-bg">

  </div>
</template>

<script setup lang="ts">

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
  background-image: linear-gradient(45deg,
      rgb(0, 3, 38) 0%,
      rgb(82, 15, 117) 100%);
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
  z-index: -1;
}
</style>