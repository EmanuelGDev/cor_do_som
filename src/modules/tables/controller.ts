import { FastifyReply, FastifyRequest } from "fastify";
import { TableService } from "./sevice";

class TableController{

    private service : TableService

    constructor(){
        this.service = new TableService();
    }

    async getTables(request : FastifyRequest, reply : FastifyReply){
        try{
            const tables = await this.service.getTables();
            return reply.code(200).send(tables)
        } catch(err){
            return reply.code(400).send(err)
        }
    }

    async getTable(request : FastifyRequest, reply : FastifyReply){
        try{
            const {id} = request.params as {id: string}
            const table = await this.service.getTable(id);
            return reply.code(200).send(table)
        } catch(err){
            return reply.code(400).send(err)
        }
    }    

    async createTable(request: FastifyRequest, reply : FastifyReply){ 
        try{
            const {num} = request.body as {num : string}
            const table = await this.service.createTable(num);
            return reply.code(200).send(table)
        }catch(err){
            return reply.code(400).send(err)
        }
    }

    async deleteTable(request: FastifyRequest, reply : FastifyReply){ 
        try{
            const {id} = request.params as {id : string}
            const table = await this.service.deleteTable(id);
            return reply.code(200).send(table)
        }catch(err){
            return reply.code(400).send(err)
        }
    }
}

export { TableController }