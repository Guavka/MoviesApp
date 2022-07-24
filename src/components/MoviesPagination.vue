<template>
  <ElPagination background layout="prev, pager, next, jumper" :total="maxMovies" :page-size="moviesPerPage"
    :current-page="curPage" @update:current-page="onUpdateCurrentPage" @update:page-size="onUpdatePageSize" />
</template>

<script setup lang="ts">
export interface Prop {
  moviesPerPage: number,
  currentPage: number,
  maxMovies: number
}
const props = defineProps<Prop>()

const curPage = ref(props.currentPage)
const curPageSize = ref(props.currentPage)

function onUpdateCurrentPage(pageIndex: number) {
  curPage.value = pageIndex
}
function onUpdatePageSize(pageSize: number) {
  curPageSize.value = pageSize
}
</script>

<style scoped>
</style>