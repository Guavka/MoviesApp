<template>
  <div class="movies-pagination">
    <ElPagination background layout="prev, pager, next, jumper" :total="maxMovies" :page-size="curPageSize"
      :current-page="curPage" @update:current-page="onUpdateCurrentPage" @update:page-size="onUpdatePageSize" />
  </div>
</template>

<script setup lang="ts">
export interface Prop {
  moviesPerPage: number,
  currentPage: number,
  maxMovies: number
}
const props = defineProps<Prop>()
const emit = defineEmits<{
  (e: 'UpdateCurrentPage', page: number): void,
  (e: 'UpdatePageSize', pageSize: number): void,
}>();

const curPage = ref(props.currentPage)
const curPageSize = ref(props.moviesPerPage)

function onUpdateCurrentPage(pageIndex: number) {
  curPage.value = pageIndex
  emit('UpdateCurrentPage', curPage.value)
}
function onUpdatePageSize(pageSize: number) {
  curPageSize.value = pageSize
  emit('UpdatePageSize', curPageSize.value)
}
</script>

<style scoped lang="scss">
@mixin pagination-elem {
  background-color: transparent;
  border-color: #fff;
  font-size: 12px;
  color: #fff;
}

.movies-pagination {
  ::v-deep(.el-pagination) {

    .btn-prev,
    .btn-next {
      @include pagination-elem;
    }

    .el-pager .number,
    .more {
      @include pagination-elem;
    }

    .el-pagination__jump {
      @include pagination-elem;

      .el-input__inner {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  ::v-deep(.el-pagination.is-background) {
    .el-pager li:not(.is-disabled).is-active {
      background-color: #fff;
      border-color: #fff;
      color: black;
      font-size: 14px;
    }
  }
}
</style>