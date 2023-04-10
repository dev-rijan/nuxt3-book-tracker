<template>
  <n-card :title="book.title">
    <n-space vertical>
      <img src="../assets/images/book_cover.svg" height="300" width="200" />
      <div class="book-name">{{ book.author }}</div>
      <div v-if="book.readAt" class="read-at">{{ book.readAt }}</div>
    </n-space>
  </n-card>

  <BookDetail></BookDetail>
</template>
<script lang="ts" setup>
import { NCard, NSpace } from 'naive-ui'
import { Book } from '@/types/book'

interface Props {
  book: Book
}

const show = ref(false)
const props = defineProps<Props>()
</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
