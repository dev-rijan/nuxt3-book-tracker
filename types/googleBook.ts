interface GoogleBook {
  volumeInfo: {
    title: string
    authors: string[]
  }
}

interface GoogleBookResponse {
  totalItems: Number
  items: GoogleBook[]
}

export type { GoogleBookResponse }
