import { app } from "../../server"
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken"

class AuthService{
  private app

  constructor(app : any) {
    this.app = app;
  }

  async login(cpf : string){

    const jwt_secret = process.env.JWT_SECRET as string

    if(!cpf){
      throw new Error("Preencha o cpf")
    }

    const user = await prisma.user.findUnique({
        where: {cpf}
    })
    
    if(!user){
      throw new Error("Usuário não encontrado")
    }
    const token = jwt.sign({id : user.id ,name : user.name, admin : user.admin, cpf : user.cpf}, jwt_secret, {expiresIn : "12h"})

    return {token, id : user.id ,name : user.name, admin : user.admin, cpf : user.cpf}
  }
}

export {AuthService}