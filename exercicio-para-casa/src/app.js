const express = require("express");
const app = express();

const router = require("./route/gamesRoutes");

//rotas
app.use("/", router);

module.exports = app;
