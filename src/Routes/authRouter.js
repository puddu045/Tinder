const express = require("express");
const User = require("../models/user");
const { generateToken , verifyToken} = require("../middlewares/token");
const authRouter = express.Router();
const cookieParser = require("cookie-parser")
authRouter.use(cookieParser())

authRouter.post("/signup", async (req,res)=>{

    try{
        const user = new User (req.body);
        await user.save();
        res.send("User saved successfully")
        //send him to login screen
    } catch (err){
        res.send(err.message)
    }
    
})

authRouter.get("/login", async (req,res)=>{

    try{
        const user = await User.find({emailID: req.body.emailID});
        if(user.length == 0 || req.body.password !== user[0].password){
            res.send("Invalid Credentials")
        } else{
            const token = await generateToken(user);
            res.cookie('token', token, {maxAge: 720000})
            res.send(`You are logged in successfully, ${user[0].firstName}!!!`)
        }
        
    } catch (err){
        res.status(400).send(err.message)
    }
    
})

authRouter.post("/logout", (req,res)=>{
    res.cookie('token', null)
    res.send("Logout successful")
})

authRouter.get("/profile", async (req,res)=>{
    try{
        const {token} = req.cookies
        var decoded = await verifyToken(token)
        const user = await User.find({emailID: decoded.emailID});
        res.send(`profile of ${user[0].firstName}`)
    }catch(err){
        res.status(401).send("Invalid token" + err)
    }
})

module.exports = authRouter;