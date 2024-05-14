const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    email: String,
    mobile: Number,
    password: String,
})
const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel

const UserSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    location: String,
    type: String,
    id: Number,
})
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
