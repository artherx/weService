import mongoose, { model } from "mongoose"

const DocumentoSchema = new mongoose.Schema({
    studentId: {
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    }
},
{
    timestamps: true
})

const Document = model('Document', DocumentoSchema)

export default Document