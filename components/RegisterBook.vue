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
        <n-form-item label="ISBN" path="ISBN">
          <n-input-group>
            <n-input v-model:value="isbnNumber" placeholder="Search by ISBN" />
            <n-button type="primary" @click="searchBookByISBN">
              Search
            </n-button>
          </n-input-group>
        </n-form-item>
        <n-divider title-placement="left"> OR </n-divider>
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
          <n-date-picker v-model:formatted-value="book.readAt" type="date" />
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
<script lang="ts" setup>
import {
  NDatePicker,
  NButton,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  NInputGroup,
  FormInst,
  useMessage,
  FormRules,
  NDivider,
} from 'naive-ui'
import { BookInput } from '@/types/book'
import { GoogleBookResponse } from '@/types/googleBook'

const emits = defineEmits<{
  (e: 'close:drawer', value: boolean): void
  (e: 'register:book', value: BookInput): void
}>()

const props = withDefaults(
  defineProps<{
    openDrawer: boolean
  }>(),
  {
    openDrawer: false,
  }
)

const formRef = ref<FormInst | null>(null)
const isbnNumber = ref<string>('')
const show = ref<boolean>(false)
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

const book = ref<BookInput>({
  author: '',
  title: '',
  readAt: undefined,
})

const handleRegister = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      emits('register:book', book.value)
    }
  })
}

const searchBookByISBN = (e: MouseEvent) => {
  e.preventDefault()

  if (!isbnNumber.value) {
    message.error('Invalid ISBN number')
    return
  }

  $fetch<GoogleBookResponse>(
    'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnNumber.value
  ).then((response) => {
    if (!response.totalItems) {
      message.error('Invalid ISBN number')
      return
    }

    const googleBook = response.items[0]
    book.value.title = googleBook.volumeInfo.title
    book.value.author = googleBook.volumeInfo.authors[0]
  })
}
</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
