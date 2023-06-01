import { json } from '@sveltejs/kit'
import Student from '../../../db/models/Student.model.js'

export async function POST({request}) {
    const{nombreStudent, tipoRole}= await request.json()
    try {
        const student = new Student({
            userName:nombreStudent,
            role: tipoRole
        })
        await student.save()
        return json({
            ok: true,
            data:student,
            message: "Estudiante registrado"
        })
    } catch (error) {
        return json({
            ok:false,
            message:"error sistema",
            error
        })
    }
    
}