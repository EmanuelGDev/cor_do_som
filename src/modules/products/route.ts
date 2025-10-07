import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ProductController } from "./controller";
import authenticate from "../../lib/jwt";


const productController = new ProductController();

async function productRoutes(fastify: FastifyInstance){

    fastify.get('/:id',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) => 
        productController.getProduct(request,reply))

    fastify.get('/',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>      
        productController.getProducts(request,reply))
    
    fastify.post('/create',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>      
        productController.createProduct(request,reply))

    fastify.delete('/delete/:id',{ preHandler: [authenticate] },(request : FastifyRequest, reply : FastifyReply) =>
        productController.deleteProduct(request,reply))
}

export {productRoutes }

