"use strict";
require('dotenv').config()
const express = require("express")
const app = express();
const cors = require("cors");
const config = require("./config");

//Import Routes
const projectsRoute = require("./routes/projects")
const tasksRoute = require("./routes/tasks")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Routes
app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);

app.get('/', (req, res) => {
    res.send({ status: "Ok", message: "API!" });
} )

const PORT = process.env.APP_SERVER_PORT;
app.listen( PORT, () => console.log( `Server running on localhost ${ PORT }` ) )
