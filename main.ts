/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { getLogger } from "./logger.ts";
const log = getLogger("");
log.debug("chat-log start");

await start(manifest);
