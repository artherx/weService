import { json } from "@sveltejs/kit"
import "../../../db/connection/mongo"
import Document from '../../../db/models/Document.model'
import type { RequestEvent } from "./$types"
export async function POST({request}:RequestEvent) {
    const {teacherID, estudianteID}= await request.json()
    try {
        const documentos = await Document.find({
            profesorID:teacherID,
            studentId:estudianteID
        })
        return json({
            ok: true,
            message: "Ya te voy a dar el documento",
            data:documentos
        })
    } catch (error) {
        
        return json({
            ok: false,
            message: "Upps hubo algun error!!",
            error
        })
    }
}