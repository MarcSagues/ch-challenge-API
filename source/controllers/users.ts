import { books, setNewValueToBooks } from './../data/books'
import { Request, Response, NextFunction } from 'express'
import axios, { AxiosResponse } from 'axios'
import { Books } from '../interfaces/books'
import fs from 'fs'
import { User } from '../interfaces/users'

const USERS_JSON_DIR = require.resolve('../data/users.json')

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    let users = JSON.parse(
        fs.readFileSync(require.resolve('../data/users.json'), 'utf8')
    )
    return res.status(200).json({
        message: users,
    })
}

const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password }: User = req.body
    let usersRegistered: Array<User> = JSON.parse(
        fs.readFileSync(USERS_JSON_DIR, 'utf8')
    )

    if (usersRegistered.find((user) => user.username === username)) {
        return res.status(500).json({ message: 'User already registered' })
    }
    usersRegistered.push({ username, password })
    fs.writeFileSync(USERS_JSON_DIR, JSON.stringify(usersRegistered))

    return res.status(200).json({
        message: 'User registration successful',
    })
}

export default {
    getUsers,
    signUpUser,
}
