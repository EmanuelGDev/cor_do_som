import prisma from "../../lib/prisma";

interface createBillProps{
    name : string,
    tableId : string
}

class BillService{

    async createBill({name, tableId} : createBillProps){
        if(!name || !tableId){
            throw new Error("Preencha todos os campos")
        }

        const amount  = 0;

        const bill = await prisma.bill.create({
            data:{
                name,
                amount,
                tableId : Number(tableId)
            }
        })

        return bill
    }

}

export {BillService}