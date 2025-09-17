import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { TableController,  } from "./controller";

const tableController = new TableController();

async function tableRoutes(fastify: FastifyInstance){
    fastify.get('/',(request : FastifyRequest, reply : FastifyReply) => 
        
        tableController.getTables(request,reply))

    fastify.post('/create',(request : FastifyRequest, reply : FastifyReply) =>      
        tableController.createTable(request,reply))
        
    /*fastify.delete('/delete/:id', (request: FastifyRequest, reply : FastifyReply)=> 
        tableController.deleteTable(request,reply))*/
}

export {tableRoutes }

