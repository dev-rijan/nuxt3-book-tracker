interface Book {
  id: string
  title: string
  author: string
  readAt?: string
}

type BookInput = Partial<Omit<Book, 'id'>>

export type { Book, BookInput }
