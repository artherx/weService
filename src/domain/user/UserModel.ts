
export interface UserModel {
    userName: string
    password: string
    createUs?: Date
    role: UserRole
}

export type UserRole = 'teacher' | 'admin'