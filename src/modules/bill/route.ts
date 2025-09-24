import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BillController } from "./controller";

const billController = new BillController();

async function billRoutes(fastify: FastifyInstance){



    fastify.post('/create',(request : FastifyRequest, reply : FastifyReply) => 
            
        billController.createBill(request,reply))
}

export {billRoutes}