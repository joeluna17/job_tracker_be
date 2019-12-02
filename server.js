require('dotenv').config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const customerRouter = require("./routes/customers/customers_routes");
const jobTypeRouter = require("./routes/job_types/job_types_routes");
const itemsRouter= require('./routes/items/items_routes.js');


//create a express object
const server = express(); 

//express server setup
server.use(morgan());
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/customer", customerRouter);
server.use("/job_types", jobTypeRouter);
server.use('/items', itemsRouter);

server.get("/", (req, res) => {
    res.send(`<h1>Welcome to the Job Tracker Application!</h1>`);
});

module.exports = server;
