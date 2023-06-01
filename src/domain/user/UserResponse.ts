import type { UserModel } from "./UserModel"

export interface UserRespose {
    ok: boolean
    message: string
    error?: string
    data?: UserModel | null
}