import { FastifyInstance } from "fastify";
import { userRoutes } from "../modules/user/route";
import { tableRoutes } from "../modules/tables/route";
import { productRoutes } from "../modules/products/route";

async function routes(fastify : FastifyInstance){
    fastify.register(userRoutes, { prefix : '/user'});
    fastify.register(tableRoutes, { prefix : '/table'});
    fastify.register(productRoutes, { prefix : '/product'})
}

export {routes}