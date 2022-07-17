import MovieItem from '@/components/MovieItem.vue'
import { mount } from 'cypress/vue'

describe('MovieItem.cy.ts', () => {
  it('mount', () => {
    mount(MovieItem, {
      propsData: {
        movie: 'Hello'
      }
    })
  })
})