<template>
  <ElDialog v-model="store.isShowModal" title="Movie view" width="60%" :before-close="handleClose">
    <div class="container d-flex">
      <div class="poster" :style="posterBg"></div>
      <div class="text-info-wrap d-flex">
        <div class="main-info">
          <div class="title">{{ movie.title }}</div>
          <div class="metascore">
            <ElRate v-model="rate" disabled show-score text-color="#ff9900" score-template="{value} points" />
          </div>
          <div class="plot">{{ movie.plot }}</div>
          <div class="short-info-wrap d-flex">
            <div class="year accent">{{ movie.year }}</div>
            <div class="duration accent">{{ movie.runtime }} min</div>
            <div class="genre accent">{{ movie.genre.toString() }}</div>
          </div>
        </div>
        <div class="sec-info d-flex">
          <div class="production-info d-flex">
            <div class="production-title">Production</div>
            <div class="production-value width-70 ">{{ movie.production }}</div>
          </div>
          <div class="country-info d-flex">
            <div class="country-title">Country</div>
            <div class="country-value width-70 ">{{ movie.country.toString() }}</div>
          </div>
          <div class="director-info d-flex">
            <div class="director-title">Director</div>
            <div class="director-value width-70 ">{{ movie.director }}</div>
          </div>
          <div class="writer-info d-flex">
            <div class="writer-title">Writer</div>
            <div class="writer-value width-70 ">{{ movie.writers.toString() }}</div>
          </div>
          <div class="actors-info d-flex">
            <div class="actors-title">Actors</div>
            <div class="actors-value width-70 ">{{ movie.actors.toString() }}</div>
          </div>
          <div class="awards-info d-flex">
            <div class="awards-title">Awards</div>
            <div class="awards-value width-70 ">{{ movie.awards }}</div>
          </div>
        </div>
      </div>
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
import { useMovieInfoStore } from '@/modules/movie/store/movieInfo';

const store = useMovieInfoStore()
const posterBg = computed(() => {
  return {
    "background-image": `url(${store.movie.poster}})`
  }
}
)
const movie = computed(() => store.movie)
const rate = computed(() => movie.value.imdbRating / 2)

function handleClose() {
  store.hideModal()
}
</script>

<style scoped lang="scss">
.d-flex {
  display: flex;
  justify-content: space-between;
}

.width-70 {
  width: 80%
}

.accent {
  color: white;
  background-color: green;
  border-radius: 5px;
  padding: 5px;
  margin: 10px
}

.container {
  width: 100%;
  height: 500px;

  .poster {
    width: 40%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text-info-wrap {
    flex-direction: column;
    width: 60%;
    height: 100%;
    font-size: 20px;

    .title {
      font-size: 30px;
      margin-bottom: 10px;
    }

    .short-info-wrap {
      justify-content: flex-start;

      .year {
        margin-left: 0;
      }
    }

    .sec-info {
      flex-direction: column;
      margin-top: 10px;

      div {
        margin-bottom: 5px;
      }
    }
  }
}
</style>