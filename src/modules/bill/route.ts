import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BillController } from "./controller";

const billController = new BillController();

async function billRoutes(fastify: FastifyInstance){


    fastify.get('/table/:tableId',(request : FastifyRequest, reply : FastifyReply) =>

        billController.getBills(request,reply))
        
    fastify.post('/create',(request : FastifyRequest, reply : FastifyReply) => 
            
        billController.createBill(request,reply))

    fastify.post('/add-product',(request : FastifyRequest, reply : FastifyReply) =>

        billController.addProductToBill(request,reply)) 
}

export {billRoutes}