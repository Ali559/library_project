import express from 'express'
const router = express.Router();
import userController from '../controllers/userController.js'
import verifyToken from '../config/verifyJWTtoken.js'
/**
 * @param  {} '/' 
 * @param  {} verifyToken {@link verifyToken} // * press ctrl + click to get to the link source
 * @param  {} userController.getAll
 */
router.get('/', verifyToken, userController.getAll)

/**
 * @param  {userName'} '/
 * @param  {} verifyToken {@link verifyToken} // * press ctrl + click to get to the link source
 * @param  {} userController.getOne
 */
router.get('/:userName', verifyToken, userController.getOne)

/**
 * @param  {} '/sign_up'
 * @param  {} userController.signUp
 */
router.post('/sign_up', userController.signUp)

/**
 * @param  {} '/login'
 * @param  {} userController.login
 */
router.post('/login', userController.login)

export default router;