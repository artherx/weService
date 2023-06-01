import { json } from '@sveltejs/kit'
import "../../../db/connection/mongo"
import Document from '../../../db/models/Document.model'
import type { DocumentModel } from '../../../domain/document/DocumentModel'

export async function POST({ request }) {
    const { documents } = await request.json()
    const insertDocuments: DocumentModel[] = documents
    const documentos = Document.insertMany(insertDocuments)
    return json({
        ok: true
    })
}