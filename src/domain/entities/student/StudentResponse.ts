import type { StudentModel } from "./StudentModel"

export interface StudentResponse{
    ok: boolean
    message: string
    error?: string
    data?: StudentModel | null
}