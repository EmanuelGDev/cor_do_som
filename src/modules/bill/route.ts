import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BillController } from "./controller";
import authenticate from "../../lib/jwt";

const billController = new BillController();

async function billRoutes(fastify: FastifyInstance){


    fastify.get('/table/:tableId',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>

        billController.getBills(request,reply))
        
    fastify.post('/create',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
            
        billController.createBill(request,reply))

    fastify.post('/add-product',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>

        billController.addProductToBill(request,reply)) 

    fastify.delete('/delete/:id',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>
        billController.deleteBill(request,reply))
    
    fastify.delete('/delete-product/:billId/:productId',{ preHandler: [authenticate] }, async (request : FastifyRequest, reply : FastifyReply) => {
        billController.deleteProductFromBill(request, reply)
    })

    fastify.get('/billProducts/:billId', async (request : FastifyRequest, reply : FastifyReply) => {
        billController.getBillProducts(request, reply)
    })
    }

export {billRoutes}