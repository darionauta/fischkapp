export type FaceProps = {
    flip: () => void,
    setEditMode: (status: boolean) => void,
    cardSide: 'front' | 'back'
}