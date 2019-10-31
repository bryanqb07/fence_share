const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => res.send("Hello World."))
app.listen(port, () => console.log(`Server is running on port ${port}`))


const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const users = require("./routes/api/users");
const purchases = require("./routes/api/purchases");
app.use("/api/users", users);
app.use("/api/purchases", purchases);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


