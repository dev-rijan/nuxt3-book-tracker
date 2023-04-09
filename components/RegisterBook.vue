<template>
  <n-drawer :show="openDrawer" :width="500">
    <n-drawer-content title="Register book">
      <n-form
        ref="formRef"
        :model="book"
        :rules="rules"
        label-width="auto"
        size="large"
      >
        <n-form-item label="Title" path="title">
          <n-input v-model:value="book.title" placeholder="Input book title" />
        </n-form-item>
        <n-form-item label="Author" path="author">
          <n-input
            v-model:value="book.author"
            placeholder="Input book author"
          />
        </n-form-item>
        <n-form-item label="Read at" path="readAt">
          <n-date-picker v-model:value="book.readAt" type="date" />
        </n-form-item>
        <n-form-item label="comment" path="comment">
          <n-input
            v-model:value="book.comment"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5,
            }"
          />
        </n-form-item>
        <div style="display: flex; justify-content: flex-end">
          <n-button round type="primary" @click="handleRegister">
            Register
          </n-button>
          <n-button round type="warning" @click="$emit('close:drawer')">
            Cancel
          </n-button>
        </div>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  NDatePicker,
  NButton,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  FormInst,
  useMessage,
  FormRules,
} from 'naive-ui'

export default defineComponent({
  components: {
    NButton,
    NDatePicker,
    NDrawer,
    NDrawerContent,
    NForm,
    NFormItem,
    NInput,
  },
  props: {
    openDrawer: {
      default: false,
      type: Boolean,
    },
  },
  emits: ['close:drawer', 'register:book'],
  setup() {
    const formRef = ref<FormInst | null>(null)
    const message = useMessage()
    const rules: FormRules = {
      title: [
        {
          required: true,
          message: 'Title is required',
        },
      ],
      author: [
        {
          required: true,
          message: 'Auther is required',
        },
      ],
    }

    return {
      book: ref({
        author: null,
        title: null,
        comment: null,
        readAt: null,
      }),
      formRef,
      rules,
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
  methods: {
    handleRegister(e: MouseEvent) {
      e.preventDefault()
      this.formRef?.validate((errors) => {
        if (!errors) {
          console.log('called')
          this.$emit('register:book', this.book)
        }
      })
    },
  },
})
</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
