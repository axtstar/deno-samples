const { open } = Deno;
import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { chat } from './chat.ts'
import { acceptWebSocket, acceptable } from 'https://deno.land/std/ws/mod.ts';

// routing
listenAndServe( {port: 3030} ,async (req) => {
  if (req.method === "GET" && req.url === "/") {
    req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: await Deno.open("./public/index.html"),
    });
  }

  if (req.method === "GET" && req.url === "/index.js") {
    req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "application/javascript",
      }),
      body: await Deno.open("./public/index.js"),
    });
  }

  if (req.method === "GET" && req.url === "/chat.html") {
    req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: await Deno.open("./public/chat.html"),
    });
  }

  // WebSockets Chat
  if (req.method === "GET" && req.url === "/ws") {
    if (acceptable(req)) {
      acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      }).then(chat);
    }
  }  
});

console.log("Server running on localhost:3030");