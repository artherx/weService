import { json } from '@sveltejs/kit'
import User from '../../../db/models/User.model.js'

export async function POST({request}) {
    const { nombreUsuario, contraseña}= await request.json()
    try{
        const user = await User.findOne({ userName: nombreUsuario, password:contraseña})
        if (user === null){
            return json({
                ok: false,
                message: "Usuario o contraseña invalido",
                data: user
            })
        }
        return json({
            ok: true,
            message: "Este es tu usuario",
            data: user
        })
    } catch(error){
        return json({
            ok: false,
            message: "Upps hubo algun error!!",
            error
        })
    }
}