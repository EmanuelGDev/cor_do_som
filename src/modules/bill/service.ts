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

<<<<<<< HEAD
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


=======
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

>>>>>>> 90bf432c456cc25eda020788795dda95c98e0ae2
}

export {BillService}