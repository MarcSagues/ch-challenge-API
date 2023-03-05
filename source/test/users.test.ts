import request from 'supertest'
import { describe, expect, test } from '@jest/globals'

const baseURL = 'http://localhost:4000'

describe('Register user', () => {
    const newUser = {
        username: 'username_test',
        password: 'password_test',
    }

    it('Should return 200', async () => {
        const response = await request(baseURL).post('/users').send(newUser)
        expect(response.statusCode).toBe(200)
    })
    it('Should return 500', async () => {
        const response = await request(baseURL).post('/users').send(newUser)
        expect(response.statusCode).toBe(500)
    })
})
