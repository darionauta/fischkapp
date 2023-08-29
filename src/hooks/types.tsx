import { CardType, SaveCardProps } from "../layouts/Card/types"

export type CardApi = {
    front: string,
    back: string,
    _id: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export type UpdateCardBody = {
    id: string,
    front: string,
    back: string
}

export type FetchProps = {
    method: string,
    body?: SaveCardProps | UpdateCardBody,
    id?: string
}