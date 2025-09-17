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
            return reply.code(400)
        }
    }

    async createTable(request: FastifyRequest, reply : FastifyReply){ 
        try{
            const {num} = request.body as {num : string}
            const table = await this.service.createTable({num});
            return reply.code(200).send(table)
        }catch(err){
            return reply.code(400)
        }
    }
}

export { TableController }