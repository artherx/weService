import { json } from '@sveltejs/kit'
import "../../../db/connection/mongo"
import User from '../../../db/models/User.model.js'
import type { RequestEvent } from './$types'

export async function POST({ request }:RequestEvent) {
    const { nombreUsuario, contraseña, role } = await request.json()
    try {
        const user = new User({
            userName: nombreUsuario,
            password: contraseña,
            role: role
        })
        await user.save()
        return json({
            ok: true,
            message: "Usuario registrado!!"
        })
    } catch (error) {
        return json({
            ok: false,
            message: "Upps hubo algun error!!",
            error
        })
    }
    
}