import { CardType, SaveCardProps } from "../layouts/Card/types"

export type CardApi = {
    front: string,
    back: string,
    _id: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export type FetchProps = {
    method: string,
    body?: SaveCardProps,
    id?: string
}