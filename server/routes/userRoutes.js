import express from 'express'
const router = express.Router();
import userController from '../controllers/userController.js'
import verifyToken from '../config/verifyJWTtoken.js'



router.get('/', verifyToken, userController.getAll)

router.get('/:userName', verifyToken, userController.getOne)

router.post('/sign_up', userController.signUp)

router.post('/login', userController.login)

export default router;