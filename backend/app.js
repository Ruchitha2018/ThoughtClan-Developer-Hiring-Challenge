const express = require("express");
const app = express();
const cors = require("cors");


const hotelRoutes = require("./routes/hotels");

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE, {
   useNewUrlParser:true,
    useCreateIndex:true
}).then(() => console.log("DB Connected"));

console.log(process.env.DATABASE);

app.get("/", (req,res) => {
    res.send("Hello from node");
});


app.use(cors());

//Routes
app.use("/api/hotels", hotelRoutes);

const port = process.env.PORT || 8000;

app.listen(port,() =>{
    console.log("Server is running");
});
