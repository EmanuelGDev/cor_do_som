import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { TableController,  } from "./controller";
import authenticate from "../../lib/jwt";

const tableController = new TableController();

async function tableRoutes(fastify: FastifyInstance){

    fastify.get('/:id',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
        
        tableController.getTable(request,reply))

    fastify.get('/',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
        
        tableController.getTables(request,reply))

    fastify.post('/create',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>      
        tableController.createTable(request,reply))

    fastify.delete('/delete/:id',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>    
    
        tableController.deleteTable(request,reply))
}

export {tableRoutes }

