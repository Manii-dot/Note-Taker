const express = require("express")
const app = express()
const apiRoute = require("./route/apiRoute");
const htmlRoute = require("./route/htmlRoute");

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT,()=> console.log(`listenning on Port ${PORT}`));