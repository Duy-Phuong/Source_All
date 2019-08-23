const app = require("./backend/app");
const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("new server");
// });

// server.listen(process.env.PORT || 3000);

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
