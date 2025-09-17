import { FastifyInstance } from "fastify";
import { userRoutes } from "../modules/user/route";

async function routes(fastify : FastifyInstance){
    fastify.register(userRoutes, { prefix : '/user'});
}

export {routes}