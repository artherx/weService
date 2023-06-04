import { json } from "@sveltejs/kit"
import { comment } from "svelte/internal"
import "../../../db/connection/mongo"
import type { UserModel } from "../../../domain/user/UserModel"
import User from "../../../db/models/User.model"
import type { RequestEvent } from "./$types"


export async function POST({ request }:RequestEvent){
    try {
        const { nombreUsuario } = await request.json()
        const user = await User.findOne({ userName: nombreUsuario })
        return json({
            ok: true,
            message: "Este es tu usuario",
            data: user
        })
    } catch (error) {
        console.error("❌ System Error (POST commets):", error)
        return json({
            ok: false,
            message: "Upps hubo algun error",
            error,
            data: null
        })
    }

}