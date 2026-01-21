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

    async getBills(request: FastifyRequest, reply : FastifyReply){
        try{
            const {tableId} = request.params as {tableId : string}
            const bills = await this.service.getBills(tableId)
            return reply.code(200).send(bills)
        }catch(err){
            reply.code(400).send(err)
        }
    }

    async addProductToBill(request: FastifyRequest, reply : FastifyReply){
        try{
            const {productId, billId} = request.body as {productId : string, billId : string}
            const response = await this.service.addProductToBill(productId, billId)
            return reply.code(200).send(response)
        }catch(err){
            reply.code(400).send(err)
        }
    }

    async deleteBill(request: FastifyRequest, reply : FastifyReply){
        try{
            const {id} = request.params as {id : string}
            const deletedBill = await this.service.deleteBill(id)
            return reply.code(200).send(deletedBill)
        }catch(err){
            reply.code(400).send(err)
        }
    }

    async deleteProductFromBill(request: FastifyRequest, reply : FastifyReply){
        try{
            const {billId, productId} = request.params as {billId : string, productId : string}
            const response = await this.service.deleteProductFromBill(billId, productId)
            return reply.code(200).send(response)
        }catch(err){
            reply.code(400).send(err)
        }
    }
}

export {BillController}