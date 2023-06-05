export interface DocModel{
    _id?:string
    studentId: string
    studentName:string
    profesorID: string
    title: string
    tipo:string
    estado: string
    createdAt?: Date
    updatedAt?: Date
}