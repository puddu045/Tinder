const express = require("express");
const connectDB = require("./config/database");

const authRouter = require("./Routes/authRouter")

const app = express();
app.use(express.json());

app.use("/", authRouter)

connectDB().then(()=>{
    console.log("Database connected...")
    app.listen(4545, ()=>{
        console.log("Server runninng on port 4545")
    });
}).catch(err =>{
    console.error("DB not connected")
})






