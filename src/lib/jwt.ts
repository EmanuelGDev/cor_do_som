import { FastifyRequest, FastifyReply } from "fastify"
import "@fastify/jwt";

export default async function authenticate(request: FastifyRequest, reply : FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err : unknown) {
    return reply.code(401).send({ error: 'Token inválido ou expirado' })
  }
}