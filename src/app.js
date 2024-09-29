const express = require("express");

const app = express();

app.use("/test", (req,res) => {
    res.send("Hello World")
});

app.listen(3000, ()=>{
    console.log("Server runninng on port 3000")
});

