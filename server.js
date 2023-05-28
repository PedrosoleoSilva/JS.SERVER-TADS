const express = require("express");
const productsRoutes = require("./routes/products");
//const usersRoutes = require("./routes/users");
const healthRoutes = require("./routes/health");
const server = express(); //criando a instancia do express

server.use(express.json());  // vai usar funcao do express, as requisiçoes vai ter tipo json()
server.use(productsRoutes.router);
server.use(healthRoutes.router);
//server.use(usersRoutes.router);

module.exports = {server}
