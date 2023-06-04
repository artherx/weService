import { json } from "@sveltejs/kit";
import type { RequestEvent } from "../get-student/$types";
import type { UserRespose } from "../../../domain/user/UserResponse";

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