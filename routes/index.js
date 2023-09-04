const express = require('express')
const router = express.Router()
const registerRouter = require('./register')
const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization')
const userRouter = require('./users')
const productRouter = require('./products')

router.use('/register', registerRouter)

router.use('/products', productRouter)
router.use('/auth', authRouter)

router.use(authMiddleware)
router.use('/users', userRouter)

module.exports = router 