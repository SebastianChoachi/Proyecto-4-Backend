const express = require('express')
const router = express.Router()

router.get('/me', async(req,res)=>{
    const sessionUser = req.user
    
    if(!sessionUser){
        return res.status(403).send({
        message: 'Tu no deberias estar aquí'
    })
    }

    res.send({
        name: sessionUser.name,
        email: sessionUser.email
    })
})


module.exports = router


