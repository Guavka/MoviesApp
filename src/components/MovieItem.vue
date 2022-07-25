<template>
  <div class="movie-item">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-info">
        <div class="movie-info-text">
          <h3 class="movie-title">{{ movie.title }}</h3>
          <span class="movie-year">{{ movie.year }}</span>
          <ElScrollbar class="short-desc">
            <p>{{ movie.plot }}</p>
          </ElScrollbar>
        </div>
        <ElButtonGroup size="large" class="buttons-wrap" type="info">
          <ElButton plain class="movie-btn">Edit</ElButton>
          <ElButton plain class="movie-btn" @click="onRemoveClick">Remove</ElButton>
        </ElButtonGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FullMovie } from '@/modules/movie/types/fullMovie';
export interface Prop {
  movie: FullMovie
}
const props = defineProps<Prop>()
const emit = defineEmits<{
  (e: 'removeMovie', id: string, title: string): void,
  (e: 'updateMovie', id: string): void
}>()

const posterBg = computed(() => {
  return {
    "background-image": `url(${props.movie.poster}})`
  }
}
)

function onRemoveClick() {
  emit('removeMovie', props.movie.imdbID, props.movie.title)
}

</script>

<style scoped lang="scss">
.movie-item {
  text-align: center;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 400px;
  margin-bottom: 2rem;

  .movie-item-poster {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .movie-info-wrap {
    height: 100%;
    opacity: 0;
    transition: all 0.2s ease;
    display: flex;

    .movie-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;

      .movie-info-text {
        height: 90%;
        display: flex;
        flex-direction: column;

        .movie-title {
          font-size: 20px;
          margin-bottom: 5px;
        }

        .short-desc {
          padding: 12px;
          padding-right: 20px;
          text-align: justify;
        }
      }

      .buttons-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .movie-btn {
          width: 100%;
          background-color: transparent;
        }

        .movie-btn:hover {
          background-color: rgba(240, 248, 255, 0.9);
        }
      }
    }
  }

  .movie-info-wrap:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}
</style>