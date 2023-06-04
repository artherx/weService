import type { DocModel } from "../doc/DocModel"

export interface StudentModel{
    _id?:string
    userName: string
    profesor_id:string
    role: string
    createdAt?: Date
    updatedAt?: Date
}