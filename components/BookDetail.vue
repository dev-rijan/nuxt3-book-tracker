<template>
  <n-drawer
    v-model:show="show"
    :width="560"
    :close-on-esc="false"
    :mask-closable="false"
  >
    <n-drawer-content v-if="book">
      <template #header>
        <n-space justify-content="space-between">
          <span class="book-title">Book detail</span>
          <n-button
            quaternary
            circle
            class="close-button"
            type="error"
            @click="emits('close:drawer', true)"
          >
            <template #icon>
              <n-icon>
                <dismiss-icon />
              </n-icon>
            </template>
          </n-button>
        </n-space>
      </template>
      <BookCard :book="book" />
      <div class="comment-form">
        <n-form
          ref="formRef"
          :model="bookComment"
          :rules="rules"
          label-placement="top"
          size="large"
          label-width="auto"
          :style="{
            maxWidth: '640px',
          }"
        >
          <n-form-item label="Comments" path="comment">
            <n-input
              v-model:value="bookComment.comment"
              placeholder="Add comment"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5,
              }"
            />
          </n-form-item>
          <div style="display: flex; justify-content: flex-end">
            <n-button
              :disabled="loading"
              round
              type="primary"
              @click="handleComment"
            >
              comment
            </n-button>
          </div>
        </n-form>
      </div>
      <n-spin :show="loading">
        <div class="comments">
          <n-timeline>
            <n-timeline-item
              v-for="comment in book.comments"
              :key="comment.id"
              type="info"
              :content="comment.comment"
              :time="formatDate(comment.commentAt)"
            >
              <template #icon>
                <n-icon>
                  <comment-icon />
                </n-icon>
              </template>
            </n-timeline-item>
          </n-timeline>
        </div>
      </n-spin>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import {
  NButton,
  NDrawer,
  NDrawerContent,
  NSpace,
  NForm,
  NFormItem,
  NInput,
  FormInst,
  useMessage,
  NIcon,
  FormRules,
  NTimeline,
  NTimelineItem,
  NSpin,
} from 'naive-ui'
import {
  Dismiss20Filled as DismissIcon,
  CommentNote20Regular as CommentIcon,
} from '@vicons/fluent'
import { BookComment as IBookComment } from '@/types/book'
interface Props {
  bookId: string
  openBookDetail: boolean
}
const emits = defineEmits<{
  (e: 'close:drawer', value: boolean): void
}>()
const props = defineProps<Props>()
const formRef = ref<FormInst | null>(null)
const show = toRef(props, 'openBookDetail')
const message = useMessage()

const { data: book, refresh: refreshBook } = await useAPIFetch<IBookComment>(
  '/book',
  {
    params: { bookId: props.bookId },
    transform: (data) => {
      return data?.data?.book
    },
  }
)

const bookComment = ref({
  comment: '',
})
const loading = ref<boolean>(false)
const rules: FormRules = {
  comment: [
    {
      required: true,
      message: 'Comment is required',
    },
  ],
}

const handleComment = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors && book.value) {
      loading.value = true
      useAPIFetch('/comment', {
        method: 'POST',
        body: {
          bookId: book.value.id,
          comment: bookComment.value.comment,
        },
      })
        .then(() => {
          bookComment.value.comment = ''
          refreshBook()
          message.success('Successfully commented')
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}

const formatDate = (timestamp: Number) => {
  return new Date(timestamp.valueOf()).toLocaleString()
}
</script>

<style scoped>
.n-card {
  max-width: 300px;
  max-height: 250px;
}
.close-button {
  margin-left: 22rem;
}
.comment-form {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
</style>
