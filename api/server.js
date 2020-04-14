const express = require("express");

const db = require("../data/dbConfig.js");

const accountsRouter = require('../accounts/accountRouter');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get("/", (req,res) => {
    res.send("<h1>Server Working</h1>");
})

module.exports = server;
