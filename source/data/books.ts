import { Books } from '../interfaces/books'

export let books: Array<Books> = [
    { id: 1, title: 'Example', author: 'Example', logo: 'noLogo' },
]

export const setNewValueToBooks = (newArrBooks: Array<Books>) => {
    books = newArrBooks
}
