import { FastifyInstance } from "fastify";
import { userRoutes } from "../modules/user/route";
import { tableRoutes } from "../modules/tables/route";
import { productRoutes } from "../modules/products/route";
import { billRoutes } from "../modules/bill/route";
import {authRoutes} from "../modules/auth/route"

async function routes(fastify : FastifyInstance){
    fastify.register(userRoutes, { prefix : '/user'});
    fastify.register(tableRoutes, { prefix : '/table'});
    fastify.register(productRoutes, { prefix : '/product'})
    fastify.register(billRoutes, { prefix : '/bill'})
    fastify.register(authRoutes, { prefix : '/auth'})
}

export {routes}