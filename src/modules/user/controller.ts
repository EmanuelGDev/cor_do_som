import { FastifyReply, FastifyRequest } from "fastify"
import { UserService } from "./service";

class UserController {
    private service : UserService

    constructor(){
        this.service = new UserService();
    }

    async getUsers(request : FastifyRequest, reply : FastifyReply){
        const users = await this.service.getUsers();

        reply.send(users)
    }

    async createUser(request: FastifyRequest, reply : FastifyReply){

        const {name, cpf, admin} = request.body as {name: string, cpf : string, admin: boolean}

        const user = await this.service.createUser({name,cpf,admin});

        reply.send(user)
    }
    
}

export {UserController}