import { FastifyReply, FastifyRequest } from "fastify"
import { UserService } from "./service";

class UserController {
    private service : UserService

    constructor(){
        this.service = new UserService();
    }

    async getUsers(request : FastifyRequest, reply : FastifyReply){
        try{
            const users = await this.service.getUsers();
            return reply.code(200).send(users)
        } catch(err){
            return reply.code(400).send(err)
        }
    }
    
    async getUser(request : FastifyRequest, reply : FastifyReply){
        try{
            const {id} = request.params as {id: string}
            const user = await this.service.getUser(id);
            return reply.code(200).send(user)
        } catch(err){
            return reply.code(400).send(err)
        }
    }

    async createUser(request: FastifyRequest, reply : FastifyReply){

        try{
            const {name, cpf, admin} = request.body as {name: string, cpf : string, admin: boolean}
            const user = await this.service.createUser({name,cpf,admin});
            return reply.code(200).send(user)

        }catch(err){
            return reply.code(400).send(err)
        }
    }

    async deleteUser(request: FastifyRequest, reply : FastifyReply){
        try{
            const {id} = request.params as {id: string}
            const user = await this.service.deleteUser(id);
            return reply.code(200).send(user)
        }catch(err){
            return reply.code(400).send(err)
        }
    }
    
}

export {UserController}