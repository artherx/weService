import { json } from '@sveltejs/kit'
import "../../../db/connection/mongo"
import User from '../../../db/models/User.model.js'

export async function POST({ request }) {
    const { nombreUsuario, contraseña, role } = await request.json()
    try {
        const user = new User({
            password: contraseña,
            userName: nombreUsuario,
            role
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