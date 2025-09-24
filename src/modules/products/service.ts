import prisma from "../../lib/prisma";

interface createProductProps{
    name: string,
    price : Number,
    type : string
}

class ProductService{

    async getProducts(){
        const products = await prisma.product.findMany();
        return products
    }

    async getProduct(id: string){
        const product = await prisma.product.findFirst({
            where:{id : Number(id)}
        })
        return product
    }

    async createProduct({name,price,type} : createProductProps){
        
        if(!name || !price || !type){
            throw new Error("Preencha todos os campos")
        }
        
        const existsProduct = await prisma.product.findFirst({
            where:{name : name}
        })

        if(existsProduct){
            throw new Error("Produto já cadastrado")
        }

        const product = await prisma.product.create({
            data:{
                name,
                price : Number(price),
                type
            }
        })

        return product
    }

    async deleteProduct(id : string){
        const product = await prisma.product.findFirst({
            where : {id : Number(id)}
        })

        if(!product){
            throw new Error("Selecione um produto")
        }

        const deletedProduct = await prisma.product.delete({
            where:{id : Number(id)}})
            
        return deletedProduct
    }
}

export {ProductService}