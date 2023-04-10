<template>
  <n-space vertical>
    <n-button
      size="large"
      type="primary"
      :render-icon="renderIcon"
      @click="openBookRegisterDrawer = true"
    >
      Register new book
    </n-button>
    <div class="books">
      <n-space>
        <BookCard v-for="book in books" :key="book.id" :book="book" />
      </n-space>
    </div>
    <RegisterBook
      :open-drawer="openBookRegisterDrawer"
      @register:book="onRegisterBook"
      @close:drawer="openBookRegisterDrawer = false"
    ></RegisterBook>
  </n-space>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { NSpace, NButton } from 'naive-ui'
import { BookAdd20Filled } from '@vicons/fluent'
import { Book, BookInput } from '@/types/book'

const openBookRegisterDrawer = ref<boolean>(false)
const { data: books, refresh: refreshBooks } = await useAPIFetch<Book[]>(
  '/books',
  {
    method: 'GET',
    transform: (data) => {
      return data?.data?.books
    },
  }
)

const renderIcon = () => {
  return h(BookAdd20Filled)
}

const onRegisterBook = (bookInput: BookInput) => {
  useAPIFetch('/book', { method: 'POST', body: bookInput }).then(() => {
    refreshBooks()
  })
}
</script>
