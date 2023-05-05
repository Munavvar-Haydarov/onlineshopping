const express = require("express");
var bodyParser = require("body-parser");
const connectDB = require("../db/db");
connectDB();

const productsRouter = require("../route/management.products");
const userRouter = require("../route/auth.user");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.use("/api/products", productsRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
