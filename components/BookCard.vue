<template>
  <n-card title="Clean Architecture ">
    <n-space vertical>
      <img src="../assets/images/book_cover.svg" height="300" width="200" />
      <div class="book-name">Book by c. martin</div>
    </n-space>
  </n-card>

  <BookDetail></BookDetail>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NCard, NSpace } from 'naive-ui'

export default defineComponent({
  components: {
    NCard,
    NSpace,
  },
  setup() {
    return {
      show: ref(false),
    }
  },
})
</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
