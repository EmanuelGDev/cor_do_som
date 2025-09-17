import prisma from "../../lib/prisma";

interface TableProps{
    num : string
}

class TableService{

    async getTables(){
        const tables = await prisma.table.findMany();
        return tables;
    }

    async createTable({num} : TableProps){
        const table = await prisma.table.create({
            data: {
                num
            }
        });
        return table;
    }

}

export { TableService}