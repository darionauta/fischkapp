export type CardProps = {
    setEditMode: (status: boolean) => void,
}

export interface FaceProps extends CardProps {
    flip: () => void,
    cardSide: 'front' | 'back'
}

export type CardType = {
    front: string,
    back: string,
    id: number
}