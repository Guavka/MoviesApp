<template>
  <div class="loader-wrap" v-if="store.isShowLoader">
    <ElProgress type="dashboard" :percentage="persentage" indeterminate :duration="duration" :color="loaderColor"
      :style="loaderStyle" />
  </div>
</template>

<script setup lang="ts">
import { useLoaderStore } from '@/modules/movie/store/loader';
export interface Props {
  loaderColor: string,
  persentage: number,
  duration: number
}

const props = defineProps<Props>()

const store = useLoaderStore()
const loaderStyle = computed(() => { return { '--loader-color': props.loaderColor } })
</script>

<style scoped lang="scss">
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  ::v-deep(.el-progress) {
    .el-progress__text {
      font-size: 35px !important;
      color: var(--loader-color)
    }
  }
}
</style>