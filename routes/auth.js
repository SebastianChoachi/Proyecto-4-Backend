const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

const UserService = require('../services/users')
const UserModel = require('../model/users')
const AuthService = require('../services/auth')

require('dotenv').config()

const userService = new UserService(UserModel)
const authService = new AuthService(userService)
const JWT_SECRET = process.env.JWT_SECRET_PS

router.post('/login', async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body

    try {
        const user = await authService.login(email,password)
        const userRole = {
            ...user,
            role: 'usuario',
            permissions: ['users:me']
        }
console.log(userRole)

        const token = jwt.sign({
            data: userRole,
            exp: Math.floor(Date.now()/1000 + (60*60))
        }, JWT_SECRET)

        console.log(token)

        res.status(200).json({
        mensaje: 'Login correcto',
        data: {
            token:token,
            info: {
            _id: user._id,    
            name: user.name,
            lastname: user.lastname,
            },
            role: userRole.role
        },
        });
        /*res.status(201).send({
            _id: user._id,
            token,
            role: userRole.role
        })*/

    } catch(error){
        console.error(error)
        res.status(401).send({
        message: error.message
    })
}

})

module.exports = router