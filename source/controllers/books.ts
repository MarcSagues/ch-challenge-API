import { books, setNewValueToBooks } from '../data/books'
import { Request, Response, NextFunction } from 'express'
import axios, { AxiosResponse } from 'axios'
import { Books } from '../interfaces/books'

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    let booksResponse: Array<Books> = books
    return res.status(200).json({
        message: booksResponse,
    })
}

const addBooks = async (req: Request, res: Response, next: NextFunction) => {
    const newBook: { title: string; author: string; logo: string } = req.body

    const bookToAdd: Books = {
        id: books.length + 1,
        title: newBook.title,
        author: newBook.author,
        logo: newBook.logo,
    }

    books.push(bookToAdd)

    let booksResponse: Array<Books> = books
    return res.status(200).json({
        message: booksResponse,
    })
}

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const {
        title,
        author,
        logo,
    }: { title?: String; author?: String; logo?: string } = req.body
    const id: string = req.params.id
    const bookToUpdate: Books | undefined = books.find(
        (book) => book.id === Number(id)
    )

    if (!bookToUpdate) {
        return res.status(500).json({
            message: 'Book id not found',
        })
    }

    if (title) bookToUpdate.title = title
    if (author) bookToUpdate.author = author
    if (logo) bookToUpdate.logo = logo

    let booksResponse: Array<Books> = books
    return res.status(200).json({
        message: booksResponse,
    })
}

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id
    const booksResponse: Array<Books> = books.filter(
        (book) => book.id !== Number(id)
    )
    setNewValueToBooks(booksResponse)

    return res.status(200).json({
        message: booksResponse,
    })
}

export default {
    getBooks,
    addBooks,
    updateBook,
    deleteBook,
}
