import { json } from '@sveltejs/kit'
import "../../../db/connection/mongo"
import Document from '../../../db/models/Document.model'
import type { DocumentModel } from '../../../domain/document/DocumentModel'
import type { RequestEvent } from './$types'

export async function POST({ request }:RequestEvent) {
    const { student,document } = await request.json()
    try {
        const documento = new Document({
            studentId:student,
        })
        await documento.save()
        return json({
            ok:false,
            message:"error sistema"
        })
    } catch (error) {
        return json({
            ok:false,
            message:"error sistema",
            error
        })
    }
}