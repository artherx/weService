
export interface UserModel {
    _id?: string
    userName: string
    password: string
    createUs?: Date
    role: UserRole
}

export type UserRole = 'teacher' | 'admin'