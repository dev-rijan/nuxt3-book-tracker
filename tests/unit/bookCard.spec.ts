import { mount } from '@vue/test-utils'
import { NCard, NSpace } from 'naive-ui'
import { describe, it, expect } from 'vitest'
import BookCard from '@/components/BookCard.vue'

describe('BookCard', () => {
  it('renders correctly', () => {
    const book = {
      title: 'Test Book',
      author: 'Test Author',
      readAt: '2022-01-01',
    }
    const wrapper = mount(BookCard, {
      props: {
        book,
      },
      global: {
        components: {
          NCard,
          NSpace,
        },
      },
    })

    expect(wrapper.find('.book-card').exists()).toBe(true)
    expect(wrapper.find('.n-card').exists()).toBe(true)
    expect(wrapper.find('.n-card-header__main').text()).toBe(book.title)
    expect(wrapper.find('.written-by').text()).toBe(`Written by ${book.author}`)
    expect(wrapper.find('.read-at').text()).toBe(
      `Reading finished at ${book.readAt}`
    )
  })
})
