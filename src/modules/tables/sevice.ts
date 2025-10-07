import prisma from "../../lib/prisma";

interface TableProps{
    num : string
}

class TableService{

    async getTables(){
        const tables = await prisma.table.findMany();
        return tables;
    }

    async getTable(id:string){
        const table = await prisma.table.findFirst({
            where:{id : Number(id)}
        })
        return table
    }

    async createTable(num : string){

        const existsTable = await prisma.table.findFirst({
            where:{num : Number(num)}
        });

        if(existsTable){
            throw new Error("Mesa já cadastrada")
        }
        const table = await prisma.table.create({
            data: {
                num : Number(num)
            }
        });
        return table;
    }

    async deleteTable(id : string ){
        const table = await prisma.table.findFirst({
            where:{id : Number(id)}
        });

        if(!table){
            throw new Error("Mesa não existe")
        }

        const deleteTable = await prisma.table.delete({
            where:{id : Number(id)}})
        return table
    }

}

export { TableService}