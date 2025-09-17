import { FastifyInstance } from "fastify";
import { userRoutes } from "../modules/user/route";
import { tableRoutes } from "../modules/tables/route";

async function routes(fastify : FastifyInstance){
    fastify.register(userRoutes, { prefix : '/user'});
    fastify.register(tableRoutes, { prefix : '/table'});
}

export {routes}