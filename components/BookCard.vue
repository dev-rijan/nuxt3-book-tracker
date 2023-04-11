<template>
  <div class="book-card">
    <n-card :title="book.title" embedded :bordered="false">
      <n-space vertical justify="center">
        <img src="../assets/images/book_cover.svg" height="100" width="150" />
        <div class="written-by">Written by {{ book.author }}</div>
        <div class="read-at">Reading finished at {{ book.readAt }}</div>
      </n-space>
      <slot name="actions"></slot>
    </n-card>
  </div>
</template>
<script lang="ts" setup>
import { NCard, NSpace } from 'naive-ui'
import { Book } from '@/types/book'

interface Props {
  book: Book
}
const props = defineProps<Props>()
</script>

<style scoped>
.n-card {
  max-width: 300px;
  height: 300px;
}
</style>
