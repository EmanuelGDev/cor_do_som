import { FastifyReply, FastifyRequest } from "fastify"
import { BillService } from "./service";

class BillController{

    private service : BillService

    constructor(){
        this.service = new BillService();
    }

    async createBill(request: FastifyRequest, reply : FastifyReply){
        try{
            const {name, tableId} = request.body as {name: string, tableId: string}
            const bill = await this.service.createBill({name, tableId})
            return reply.code(200).send(bill)
        }catch(err){
            reply.code(400).send(err)
        }
    }
}

export {BillController}