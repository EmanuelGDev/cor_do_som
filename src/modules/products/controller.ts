import{ FastifyReply, FastifyRequest } from "fastify";
import { ProductService } from "./service";

class ProductController{
    
    private service : ProductService

    constructor(){
        this.service = new ProductService();
    }

    async getProducts(request : FastifyRequest, reply : FastifyReply){
        try{
            const products = await this.service.getProducts()
            return reply.code(200).send(products)
        }catch(err){
            return reply.code(400)
        }
    }
    async createProduct(request : FastifyRequest, reply : FastifyReply){
         try{
            const {name, price, type} = request.body as {name: string, price : Number, type: string}
            const product = await this.service.createProduct({name,price,type});
            return reply.code(200).send(product)
        }catch(err){
            return reply.code(400).send(err)
        }
    }
    async deleteProduct(request : FastifyRequest, reply : FastifyReply){
        try{
            const {id} = request.params as {id: string}
            const product = await this.service.deleteProduct(id);
            return reply.code(200).send(product)
        }catch(err){
            return reply.code(400).send(err)
        }
    }
}

export {ProductController}