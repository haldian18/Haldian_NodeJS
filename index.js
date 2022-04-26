// Gunakan modul express
const express = require("express");
// Gunakan modul dotenv
const dotenv = require("dotenv").config();
// Gunakan modul path
const path = require("path");
const app = express();
// Gunakan modul routes
const routes = require("./routes/routes");

//set views file
app.set("views", path.join(__dirname, "views"));
//set view engine
app.set("view engine", "pug");

//set folder public sebagai static folder untuk static file
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", routes);


//server listening
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Aplikasi Belajar di Port ${port}"))