const mongoose = require("mongoose")
const url = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.6wlhxu6.mongodb.net/`

mongoose.connect(url)
.then(()=>{
    console.log("Conexión a la base de datos exitosa")
})
.catch((error)=>{
    console.error(error)
})

module.exports=mongoose