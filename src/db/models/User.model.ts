import mongoose, { model } from "mongoose"

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        uniq: true
    },
    password: {
        type: String,
        require: true
    },
    createUs: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        require: true
    }

})
const User = model("users", UserSchema)
export default User


