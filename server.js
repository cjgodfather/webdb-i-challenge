const express = require("express");

const server = express();

const accountRouter = require("./accountRouter");
server.use(express.json());

server.get("/", (req, res) => {
  res.send("welcome to acounts api !");
});

server.use("/api/accounts", accountRouter);

module.exports = server;
