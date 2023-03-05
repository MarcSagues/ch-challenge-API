import request from 'supertest'
import { describe, expect, test } from '@jest/globals'

const baseURL = 'http://localhost:4000'

describe('Add new book', () => {
    const newBook = {
        title: 'test',
        author: 'author_test',
        logo: 'logo',
    }
    it('Should return 200', async () => {
        const response = await request(baseURL).post('/books').send(newBook)
        expect(response.statusCode).toBe(200)
    })
})

describe('Get books', () => {
    it('Should return 200', async () => {
        const response = await request(baseURL).get('/books')
        expect(response.statusCode).toBe(200)
    })
})

describe('Delete books', () => {
    const bookId = 1
    it('Should return 200', async () => {
        const response = await request(baseURL).post('/books/' + bookId)
        expect(response.statusCode).toBe(200)
    })
})

describe('Update book', () => {
    const bookId = 1
    const bookUpdated = {
        title: 'test',
        author: 'author_test',
        logo: 'logo',
    }
    it('Should return 200', async () => {
        const response = await request(baseURL)
            .post('/books/' + bookId)
            .send(bookUpdated)
        expect(response.statusCode).toBe(200)
    })
})
