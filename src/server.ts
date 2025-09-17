import Fastify = require("fastify");
import dotenv from 'dotenv';
import { routes } from "./routes/routes";
import fastifyCors from "@fastify/cors";

dotenv.config(); 

const app = Fastify ({logger:true})

app.setErrorHandler((error, request, reply) =>{
    reply.code(400).send({ message : error.message})
})

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

app.register(routes);

const start = async () => {

    try{
        await app.listen({port : 8000})
    } catch(err){
        process.exit(1)
    }
}

start();