const jwt = require("jsonwebtoken")

const SECRET_KEY = "Secret_key";

function generateToken(user){
    payload = {
        emailID : user[0].emailID
    }

    const token = jwt.sign(payload, SECRET_KEY )
    return token;
}

const verifyToken = async (token) => {
    if(!token){
         throw new error ("No token provided");
    } else {
        const decoded = await jwt.verify(token, SECRET_KEY)
        return decoded
    }
 }


module.exports = {generateToken, verifyToken}