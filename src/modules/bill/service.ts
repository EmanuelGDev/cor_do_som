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

    async getBills(tableId : string){
        const bills = await prisma.bill.findMany({
            where:{tableId : Number(tableId)}
        })
        return bills
    }

    async addProductToBill(productId : string, billId : string){
        const product = await prisma.product.findFirst({
            where:{id : Number(productId)}
        })
        if(!product){
            throw new Error("Produto inexistente")
        }
        const bill = await prisma.bill.findFirst({
            where:{id : Number(billId)}
        })  
        if(!bill){
            throw new Error("Conta inexistente")
        }   
        const newAmount = bill.amount + product.price;

        await prisma.bill.update({
            where:{id : Number(billId)},
            data:{amount : newAmount}
        })
        return {message : "Produto adicionado com sucesso"} 


    }
    async deleteBill(id : string){
        const bill = await prisma.bill.findFirst({
            where:{id : Number(id)}
        });
        if(!bill){
            throw new Error("Conta não existe")
        }   
        const deleteBill = await prisma.bill.delete({
            where:{id : Number(id)}})
        return bill
    }

    async deleteProductFromBill(billId : string, productId : string){
        const product = await prisma.product.findFirst({
            where:{id : Number(productId)}
        })
        if(!product){
            throw new Error("Produto inexistente")
        }
        const bill = await prisma.bill.findFirst({
            where:{id : Number(billId)}
        })
        if(!bill){
            throw new Error("Conta inexistente")
        }
        const newAmount = bill.amount - product.price;

        await prisma.productBill.deleteMany({
            where:{
                billId : Number(billId),
                productId : Number(productId)
            }
        })

        await prisma.bill.update({
            where:{id : Number(billId)},
            data:{amount : newAmount}
        })

        return {message : "Produto removido com sucesso"} 

    }

    async getBillProducts(billId : string){
        const products = await prisma.productBill.findMany({
            where:{billId : Number(billId)},
        })
        return products
    }
}

export {BillService}