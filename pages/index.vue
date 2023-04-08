<template>
  <n-space vertical>
    <n-button size="large" type="primary" :render-icon="renderIcon">
      Register new book
    </n-button>
    <div class="books">
      <n-space>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </n-space>
    </div>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { NSpace, NButton } from 'naive-ui'
import { BookAdd20Filled } from '@vicons/fluent'
export default defineComponent({
  components: {
    BookAdd20Filled,
    NButton,
    NSpace,
  },
  setup() {
    return {
      renderIcon() {
        return h(BookAdd20Filled)
      },
    }
  },
})
</script>
