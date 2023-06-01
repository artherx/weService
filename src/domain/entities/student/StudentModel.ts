import type { DocModel } from "../doc/DocModel"

export interface StudentModel{
    _id?:string
    userName: string
    role: string
    documents?: DocModel[]
    createdAt?: Date
    updatedAt?: Date
}