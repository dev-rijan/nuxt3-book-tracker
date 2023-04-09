<template>
  <n-button @click="show = true"> Open </n-button>
  <n-drawer v-model:show="show" :width="502">
    <n-drawer-content title="Stoner" closable>
      <n-card title="Clean Architecture">
        <n-space>
          <img src="../assets/images/book_cover.svg" height="300" width="200" />
          Book by c. martin
        </n-space>
      </n-card>
      <n-form
        ref="formRef"
        :model="bookComment"
        :rules="rules"
        label-placement="left"
        require-mark-placement="right-hanging"
        size="large"
        label-width="auto"
        :style="{
          maxWidth: '640px',
        }"
      >
        <n-form-item label="Textarea" path="textareaValue">
          <n-input
            v-model:value="bookComment.comment"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5,
            }"
          />
        </n-form-item>
        <div style="display: flex; justify-content: flex-end">
          <n-button round type="primary" @click="handleValidateButtonClick">
            comment
          </n-button>
        </div>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  NCard,
  NButton,
  NDrawer,
  NDrawerContent,
  NSpace,
  NForm,
  NFormItem,
  NInput,
  FormInst,
  useMessage,
} from 'naive-ui'

export default defineComponent({
  components: {
    NCard,
    NButton,
    NDrawer,
    NDrawerContent,
    NForm,
    NFormItem,
    NInput,
    NSpace,
  },
  setup() {
    const formRef = ref<FormInst | null>(null)
    const message = useMessage()
    return {
      bookComment: ref({
        comment: null,
      }),
      formRef,
      rules: {
        comment: {
          required: true,
          trigger: ['blur', 'input'],
        },
      },
      show: ref<boolean>(false),
      handleValidateButtonClick(e: MouseEvent) {
        e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success('Valid')
          } else {
            message.error('Invalid')
          }
        })
      },
    }
  },
})
</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
