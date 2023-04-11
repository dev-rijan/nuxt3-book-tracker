<template>
  <n-space vertical>
    <n-button
      size="large"
      type="primary"
      :render-icon="renderIcon"
      @click="openBookRegisterDrawer = true"
      >Register new book</n-button
    >
    <n-spin :show="loading">
      <div class="books">
        <n-space>
          <BookWithAction
            v-for="book in books"
            :key="book.id"
            :book="book"
            @delete:book="onDeleteBook"
          />
        </n-space>
        <n-result
          v-if="!books || !books.length"
          title="No books found!"
          description="No books are registered yet"
        />
      </div>
    </n-spin>
    <RegisterBook
      v-if="openBookRegisterDrawer"
      :open-drawer="openBookRegisterDrawer"
      :loading="bookRegisterPending"
      @register:book="onRegisterBook"
      @close:drawer="openBookRegisterDrawer = false"
    ></RegisterBook>
  </n-space>
</template>

<script lang="ts" setup>
import { NSpace, NButton, NResult, NSpin } from 'naive-ui'
import { BookAdd20Filled } from '@vicons/fluent'
import { Book, BookInput } from '@/types/book'

const openBookRegisterDrawer = ref<boolean>(false)
const bookRegisterPending = ref<boolean>(false)
const loading = ref<boolean>(false)
const { data: books, refresh: refreshBooks } = await useAPIFetch<Book[]>(
  '/books',
  {
    transform: (data) => {
      return data?.data?.books
    },
  }
)

const renderIcon = () => {
  return h(BookAdd20Filled)
}

const onRegisterBook = (bookInput: BookInput) => {
  bookRegisterPending.value = true
  useAPIFetch('/book', { method: 'POST', body: bookInput })
    .then(() => {
      openBookRegisterDrawer.value = false
      refreshBooks()
    })
    .finally(() => {
      bookRegisterPending.value = false
    })
}

const onDeleteBook = (bookId: string) => {
  loading.value = true
  useAPIFetch('/book', { method: 'DELETE', params: { bookId } })
    .then(async () => {
      await refreshBooks()
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
