const express = require("express");
const userRoutes = require("./routes/user.route ");

const app = express();

app.set("view engine", "ejs");

app.use(express.json()); //builtin middleware
app.use(express.urlencoded({ extended: true })); // builtin middleware

app.use("/register", userRoutes);

app.listen(3000);
