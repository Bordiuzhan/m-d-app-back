const express = require("express");
const loger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const drugsRouter = require("./routes/api/drugs");
const shopsRouter = require("./routes/api/shops");
const ordersRouter = require("./routes/api/orders");
/*
const ordersRouter = require("./routes/api/orders");
*/

/* Server */
const app = express();
/* Middleware */
const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(loger(formatLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* Routes */
app.use("/api/drugs", drugsRouter);
app.use("/api/shops", shopsRouter);
app.use("/api/orders",ordersRouter);



app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});
app.use((err, req, res, next) => {
    const {status = 500, message = "Server error"} = err;
    res.status(status).json(message);
});

module.exports = app;

