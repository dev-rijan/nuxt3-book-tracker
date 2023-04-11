interface Book {
  id: string
  title: string
  author: string
  readAt?: string
}

interface Comment {
  id: string
  comment: string
  commentAt: Number
}

interface BookComment extends Book {
  comments: Comment[]
}

type BookInput = Partial<Omit<Book, 'id'>>

export type { Book, BookComment, BookInput }
