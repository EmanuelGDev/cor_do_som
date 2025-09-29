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

    async linkProductToBill(billId : string, productId : string){
        if(!billId || !productId){
            throw new Error("Preencha todos os campos")
        }   
        const bill = await prisma.bill.findUnique({
            where:{
                id : Number(billId)
            }
        })  
        if(!bill){
            throw new Error("Conta não encontrada")
        }   
        const product = await prisma.product.findUnique({
            where:{
                id : Number(productId)  
            }
        })
        if(!product){
            throw new Error("Produto não encontrado")
        }
        const billProduct = await prisma.productBill.create({
            data:{
                billId : Number(billId),
                productId : Number(productId)
            }
        })

        await prisma.bill.update({
            where:{
                id : Number(billId) 
            },
            data:{
                amount : bill.amount + product.price
            }
        })  
        return billProduct
        
    }

}

export {BillService}