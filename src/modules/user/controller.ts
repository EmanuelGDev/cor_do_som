import { FastifyReply, FastifyRequest } from "fastify"
import { UserService } from "./service";

class UserController {
    private service : UserService

    constructor(){
        this.service = new UserService();
    }

    async getUsers(request : FastifyRequest, reply : FastifyReply){
        const users = await this.service.getUsers

        reply.send(users)
    }
}

export {UserController}