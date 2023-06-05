import { json } from "@sveltejs/kit"
import "../../../db/connection/mongo"
import type { RequestEvent } from "../get-student/$types"

export async function POST({request}:RequestEvent) {
    const teacherId = request.json()
    try {
        
    } catch (error) {
        return json({
            ok: false,
            message: "Upps hubo algun error!!",
            error
        })
    }
}