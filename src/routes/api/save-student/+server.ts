import { json } from '@sveltejs/kit'
import "../../../db/connection/mongo"
import Student from '../../../db/models/Student.model.js'
import type { RequestEvent } from './$types.js'

export async function POST({ request }:RequestEvent) {
    const{nombreStudent, tipoRole, profe}= await request.json()
    try {
        const student = new Student({
            userName:nombreStudent,
            profesor_id:profe,
            role: tipoRole
        })
        await student.save()
        if(student===null){
            return json({
                ok: false,
                message: "Usuario o contraseña invalido",
                data: student
            })
        }
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