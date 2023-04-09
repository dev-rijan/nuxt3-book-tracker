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
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </n-space>
    </div>
    <RegisterBook
      :open-drawer="openBookRegisterDrawer"
      @register:book="onRegisterBook"
      @close:drawer="openBookRegisterDrawer = false"
    ></RegisterBook>
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
      openBookRegisterDrawer: ref<boolean>(false),
      renderIcon() {
        return h(BookAdd20Filled)
      },
    }
  },
  methods: {
    onRegisterBook(book) {
      console.log(book)
    },
  },
})
</script>
