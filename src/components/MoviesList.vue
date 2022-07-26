<template>
  <ElContainer direction="vertical" class="movie-list-wrap">
    <h3 class="list-title">IMDB Top 250</h3>
    <ElRow :gutter="50" justify="center">
      <template v-if="isExist">
        <ElCol :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(movie, key) in list" :key="key">
          <MovieItem :movie="movie" @mouseover="onMouseOver(movie.poster)" @remove-movie="onRemoveMovie"
            @edit-movie="onShowMovieInfo">
          </MovieItem>
        </ElCol>
      </template>
      <template v-else>
        Empty list
      </template>
    </ElRow>
  </ElContainer>
</template>

<script setup lang="ts">
import { useMovieInfoStore } from '@/modules/movie/store/movieInfo';
import { useMoviesStore } from '@/modules/movie/store/movies';
import type { FullMovie } from '@/modules/movie/types/fullMovie';
import Delete from '~icons/ep/delete'

export interface Prop {
  list: Record<string, FullMovie>
}

const props = defineProps<Prop>()
const emit = defineEmits<{
  (e: 'changePoster', poster: URL): void
}>();
const isExist = computed(() => Object.keys(props.list).length)

function onMouseOver(poster: URL | undefined) {
  if (poster !== undefined) {
    emit('changePoster', <URL>poster)
  }
}
function onRemoveMovie(id: string, title: string) {
  ElMessageBox.confirm(
    `Are you sure to remove ${title}?`,
    'Warning',
    {
      type: 'warning',
      icon: markRaw(Delete),
    })
    .then(() => {
      const store = useMoviesStore()
      store.removeMovie(id)
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
}
function onShowMovieInfo(movie: FullMovie) {
  useMovieInfoStore().showModalByMovie(movie)
}
</script>

<style scoped lang="scss">
.movie-list-wrap {
  padding: 0px 2.5rem;

  .list-title {
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>