const mongoose = require("mongoose");

const connectDB = async  () => {
    await mongoose.connect("mongodb+srv://prudhvi2890:5QQpla7ayfmEZgub@rajdb.3dpx9.mongodb.net/Tinder");
}

module.exports = connectDB;