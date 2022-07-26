<template>
  <div class="header">
    <div class="nav-container">
      <a href="#" class="logo">MovieDB</a>
      <ElAutocomplete class="search-field" v-model="searchTitle" placeholder="Search" :prefix-icon="Search"
        @select="handleSelect" :fetch-suggestions="querySearchAsync" :debounce="500" popper-class="my-autocomplete">
        <template #default="{ item }">
          <div class="item-wrapper">
            <img class="poster" :style="posterBg(item)" />
            <div class="text-info">
              <div class="title">{{ item.value }}</div>
              <div class="year">{{ item.year }}</div>
              <div class="type">{{ item.type }}</div>
            </div>
          </div>
        </template>
      </ElAutocomplete>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieInfoStore } from '@/modules/movie/store/movieInfo';
import { useMoviesStore } from '@/modules/movie/store/movies';
import type { MovieType } from '@/modules/movie/types/movieEnums';
import Parser from '@/modules/utils/parser';
import Search from '~icons/ep/search'

interface LinkValue {
  value: string,
  link: string,
  poster: URL,
  year: number,
  type: MovieType
}

const store = useMoviesStore()
const searchTitle = ref('')

function posterBg(item: LinkValue) {
  return {
    "background-image": `url(${item.poster}})`
  }
}

const querySearchAsync = async () => {
  const query = Parser.GetValidString(searchTitle.value, 'searchTitle', 3, 50)
  if (query === undefined) {
    return
  }
  try {
    const result = await store.searchMovies(searchTitle.value)
    if (result === undefined)
      return

    const baseArray: LinkValue[] = []
    const titleArray = result.reduce((acc, el) => {
      const movieObj: LinkValue = {
        value: el.title,
        link: el.imdbID,
        poster: el.poster,
        type: el.type,
        year: el.year
      }
      acc.push(movieObj)
      return acc
    }, baseArray)
    return titleArray
  }
  catch {
    return []
  }
}
function handleSelect({ link }: any): void {
  useMovieInfoStore().showModalByID(link)
}
</script>

<style scoped lang="scss">
.header {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 15px;
  width: 60%;

  .logo {
    width: 80%;
    font-size: 20px;
  }

  .search-field {
    width: 30%;
  }
}

.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .poster {
    width: 200px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    width: 50%;

    .title {
      font-size: 24px;
    }
  }
}
</style>