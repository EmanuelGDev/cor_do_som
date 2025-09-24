import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ProductController } from "./controller";
import { request } from "http";


const productController = new ProductController();

async function productRoutes(fastify: FastifyInstance){

    fastify.get('/:id',(request : FastifyRequest, reply : FastifyReply) => 
        productController.getProduct(request,reply))

    fastify.get('/',(request : FastifyRequest, reply : FastifyReply) =>      
        productController.getProducts(request,reply))
    
    fastify.post('/create',(request : FastifyRequest, reply : FastifyReply) =>      
        productController.createProduct(request,reply))

    fastify.delete('/delete/:id',(request : FastifyRequest, reply : FastifyReply) =>
        productController.deleteProduct(request,reply))
}

export {productRoutes }

