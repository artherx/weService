import { json } from '@sveltejs/kit'
import "../../../db/connection/mongo"
import Document from '../../../db/models/Document.model'
import type { RequestEvent } from './$types'

export async function POST({ request }:RequestEvent) {
    const { studentid,student,titulo,profe,tip } = await request.json()
    try {
        const documento = new Document({
            studentId:studentid,
            studentName:student,
            profesorID:profe,
            title:titulo,
            tipo:tip,
            estado:'espera'
        })
        await documento.save()
        
        if(documento===null){
            return json({
                ok: false,
                message: "documento vacio",
                data: documento
            })
        }
        return json({
            ok:true,
            data:documento,
            message:"se ha resgistrado un documento"
        })
    } catch (error) {
        return json({
            ok:false,
            message:"error sistema",
            error
        })
    }
}