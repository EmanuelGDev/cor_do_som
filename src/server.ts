import Fastify from "fastify";
import dotenv from "dotenv";
import { routes } from "./routes/routes";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";

dotenv.config();

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || "secret",
});

app.decorate(
  "authenticate",
  async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  }
);

app.register(routes);

export { app };
