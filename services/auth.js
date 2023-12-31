const bcrypt =  require('bcrypt')

const  AuthService = class{
    constructor(userService){
        this.UserService=userService
    }

async login(email,password){
    const user=await this.UserService.getByEmail(email)
if (!user){
    throw new Error('Este usuario no existe')
} else if(await bcrypt.compare(password, user.password) || !user){
    return user.toObject();
} else {
    throw new Error('No puedes pasar, no cumples con los datos')
}
}

}

module.exports = AuthService