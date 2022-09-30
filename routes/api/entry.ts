import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const socket = new WebSocket(`ws://localhost:8080/entry`);

  return socket;
};
