import { json } from "@sveltejs/kit"
import "../../../db/connection/mongo"
import Student from "../../../db/models/Student.model"
import type { RequestEvent } from "./$types"
export async function POST({request}:RequestEvent) {
    const {tipo}= await request.json()
    try {
        const student = await Student.find({
            role:tipo
        })
        if( student==null){
            return json({
                ok: true,
                message: "no hay nada dentro",
            })
        }
        return json({
            ok: true,
            message: "Ya te voy a dar los documentos",
            data:student
        })
    } catch (error) {
        
        return json({
            ok: false,
            message: "Upps hubo algun error!!",
            error
        })
    }
}