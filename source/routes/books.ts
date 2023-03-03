import express from 'express'
import controller from '../controllers/books'
import userController from '../controllers/users'
const router = express.Router()

router.get('/books', controller.getBooks)
router.post('/books', controller.addBooks)
router.post('/books/:id', controller.updateBook)
router.delete('/books/:id', controller.deleteBook)
router.get('/users', userController.getUsers)
router.post('/users', userController.signUpUser)

export default router
