import express from 'express'
const router = express.Router();
import userController from '../controllers/userController.js'




router.get('/', userController.getAll)

router.get('/:userName', userController.getOne)

router.post('/sign_up', userController.signUp)

router.post('/login', userController.login)

export default router;