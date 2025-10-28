import http from "http"; // Import http module
import dotenv from "dotenv"; // Import dotenv module
dotenv.config(); // Read .env file

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.url === "/" && request.method === "GET") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Home</h1>");
      return;
    }

    if (request.url === "/about" && request.method === "GET") {
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>About</h1>");
      return;
    }

    if (request.url === "/my-account" && request.method === "GET") {
      response.writeHead(403, { "content-type": "text/plain" });
      response.end("You have no access to this page");
      return;
    }

    // Fallback/404
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Page not found");
    return;
  }
);

const PORT = process.env.PORT || 8888;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
