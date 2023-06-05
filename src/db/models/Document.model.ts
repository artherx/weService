import mongoose, { model } from "mongoose"

const DocumentoSchema = new mongoose.Schema({
    studentId: {
        type: String,
        require: true
    },
    studentName: {
        type: String,
        require: true
    },
    profesorID:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    tipo:{
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true,
        default: 'espera'
    }
},
{
    timestamps: true
})

const Document = model('Document', DocumentoSchema)

export default Document