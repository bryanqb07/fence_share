const express = require("express");
const app = express();
const port = process.env.port || 5000;
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const orders = require("./routes/api/orders");
const products = require("./routes/api/products");
const bodyParser = require("body-parser");
const passport = require("passport");

app.use(passport.initialize())
app.listen(port, () => console.log(`Server is running on port ${port}`))

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/orders", orders);
app.use("/api/products", products);
