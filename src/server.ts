import Fastify = require("fastify");

const app = Fastify ({logger:true})

app.setErrorHandler((error, request, reply) =>{
    reply.code(400).send({ message : error.message})
})

const start = async () => {

    try{
        await app.listen({port : 8000})
    } catch(err){
        process.exit(1)
    }
}

start();