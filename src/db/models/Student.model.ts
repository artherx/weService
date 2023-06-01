import mongoose, { model } from "mongoose";

const StudenSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
},
    { timestamps: true }
)

const Student = model('Student', StudenSchema)
export default Student