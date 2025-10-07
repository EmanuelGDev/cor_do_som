import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "./service";

class AuthController {
    
    private service : AuthService

    constructor(app : any){
        this.service = new AuthService(app);
    }

    async login(request: FastifyRequest, reply : FastifyReply){
        try{
            const{cpf} = request.body as {cpf: string}
            const logged = await this.service.login(cpf)
            return reply.code(200).send(logged)
        }
        catch(err){
            return reply.code(400).send(err);
        }
    }
}

export {AuthController}