const mongoose = require("mongoose");
require("dotenv").config();

// Db Connection
mongoose.set('strictQuery', false);
const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection };
