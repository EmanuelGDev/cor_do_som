import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserController} from "./controller";

const userController = new UserController();

async function userRoutes(fastify: FastifyInstance){

    fastify.get('/:id',(request : FastifyRequest, reply : FastifyReply) => 
        
        userController.getUser(request,reply))
    
    fastify.get('/',(request : FastifyRequest, reply : FastifyReply) => 
        
        userController.getUsers(request,reply))

    fastify.post('/create',(request : FastifyRequest, reply : FastifyReply) => 
        
        userController.createUser(request,reply))
        
    fastify.delete('/delete/:id', (request: FastifyRequest, reply : FastifyReply)=>
        
        userController.deleteUser(request,reply))
    

}

export {userRoutes}

