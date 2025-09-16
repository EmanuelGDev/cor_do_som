import prisma from "../../lib/prisma";

class UserService{


    async getUsers(){
        const users = await prisma.users.findmany()

        return users
    }
}

export { UserService }