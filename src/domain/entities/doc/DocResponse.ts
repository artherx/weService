import type { DocModel } from "./DocModel"

export interface DocResponse{
    ok: boolean
    message: string
    error?: string
    data?: DocModel | null
}