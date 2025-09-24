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

    async getUser(id : string){
        const user = await prisma.user.findFirst({
            where:{id : Number(id)
            }
        })
        return user      
    }

    async createUser( {name,cpf,admin} : UserProps){
        if(!name || !cpf || admin ===undefined){
            throw new Error("Preencha todos os campos")
        }

        const existsUser = await prisma.user.findFirst({
            where:{cpf : cpf}
        })

        if(existsUser){
            throw new Error("Cpf já cadastrado")
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

    async deleteUser(id : string ){
        const user = await prisma.user.findFirst({
            where:{id : Number(id)}
        });

        if(!user){
            throw new Error("Usuário inexistente")
        }

        const deleteUser = await prisma.user.delete({where
            :{id : Number(id)}})

        return user
    }
}

export { UserService }