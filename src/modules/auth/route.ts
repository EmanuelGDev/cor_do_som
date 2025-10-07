import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AuthController } from "./controller";

const authController = new AuthController(fastify);

async function authRoutes(fastify: FastifyInstance){

    fastify.post('/login',(request : FastifyRequest, reply : FastifyReply) => 
        authController.login(request,reply))

}

export {authRoutes}