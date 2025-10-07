import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserController} from "./controller";
import authenticate from "../../lib/jwt";

const userController = new UserController();

async function userRoutes(fastify: FastifyInstance){

    fastify.get('/:id',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
        
        userController.getUser(request,reply))
    
    fastify.get('/',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
        
        userController.getUsers(request,reply))

    fastify.post('/create',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
        
        userController.createUser(request,reply))
        
    fastify.delete('/delete/:id',{ preHandler: [authenticate] }, (request: FastifyRequest, reply : FastifyReply)=>
        
        userController.deleteUser(request,reply))
    
}

export {userRoutes}

