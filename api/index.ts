import { app } from "../src/server";
import { FastifyRequest, FastifyReply } from "fastify";

export default async function handler(req: any, res: any) {
  await app.ready();
  app.server.emit("request", req, res);
}
