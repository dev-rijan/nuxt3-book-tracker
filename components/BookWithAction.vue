<template>
  <div class="book-card">
    <BookCard :book="book">
      <template #actions>
        <n-space>
          <n-button strong secondary round type="info" @click="onViewBook"
            >view</n-button
          >
          <n-button strong secondary round type="error" @click="onDeleteBook"
            >delete</n-button
          >
        </n-space>
      </template>
    </BookCard>
    <BookDetail
      :book-id="book.id"
      :open-book-detail="openBookDetail"
      @close:drawer="onCloseDrawer"
    ></BookDetail>
  </div>
</template>
<script lang="ts" setup>
import { NSpace, NButton, useDialog } from 'naive-ui'
import { Book } from '@/types/book'

interface Props {
  book: Book
}
interface Emits {
  (e: 'delete:book', bookId: string): void
}
const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const dialog = useDialog()

const openBookDetail = ref(false)
const onViewBook = (e: MouseEvent) => {
  openBookDetail.value = true
}
const onDeleteBook = (e: MouseEvent) => {
  dialog.warning({
    title: 'Confirm',
    content: 'Are you sure want to delete book?',
    positiveText: 'Ok',
    negativeText: 'Cancle',
    onPositiveClick: () => {
      emits('delete:book', props.book.id)
    },
  })
}
const onCloseDrawer = () => {
  openBookDetail.value = false
}
</script>

<style scoped>
.n-card {
  max-width: 300px;
  height: 300px;
}
</style>
