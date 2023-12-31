export type FaceProps = {
    flip: () => void,
    setEditMode: (status: boolean) => void,
    cardSide: 'front' | 'back'
}

export type CardType = {
    front: string,
    back: string,
    _id: string
}

export type SaveCardProps = Omit<CardType, '_id'>