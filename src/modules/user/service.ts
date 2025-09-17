import prisma from "../../lib/prisma";

interface UserProps{
    name : string,
    cpf : string,
    admin : boolean
}

class UserService{


    async getUsers(){
        const users = await prisma.user.findMany()

        return users
    }

    async createUser( {name,cpf,admin} : UserProps){
        if(!name || !cpf || admin ===undefined){
            throw new Error("Preencha todos os campos")
        }
        const user = await prisma.user.create({
            data:{
                name,
                cpf,
                admin
            }
        })

        return user
    }
}

export { UserService }