import { Books } from '../interfaces/books'

export let books: Array<Books> = [
    {
        id: 1,
        title: 'Example',
        author: 'Example',
        logo: 'https://www.pngitem.com/pimgs/m/62-622830_png-books-black-and-white-book-logo-transparent.png',
    },
]

export const setNewValueToBooks = (newArrBooks: Array<Books>) => {
    books = newArrBooks
}
