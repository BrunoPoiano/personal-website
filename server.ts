import { serve } from "https://deno.land/std/http/server.ts";
import { serveDir } from "https://deno.land/std/http/file_server.ts";

// Create server handler
async function handler(req: Request): Promise<Response> {
  // Serve static files from the "public" directory
  return await serveDir(req, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: true,
    enableCors: true
  });
}

// Start the server
console.log("HTTP server running at http://localhost:8000");
await serve(handler, { port: 8000 });
