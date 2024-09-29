const express = require("express");

const app = express();



app.use("/test", (req,res) => {
    res.send("Hello World test")
});

app.use("/test2", (req,res) => {
    res.send("Hello World test2")
});

app.use("/", (req,res) => {
    res.send("Hello World")
});

app.listen(4545, ()=>{
    console.log("Server runninng on port 4545")
});

