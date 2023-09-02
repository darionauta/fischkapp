import { CardType } from "../layouts/Card/types";

interface IFlashcard extends CardType {
    createdAt: string;
    updatedAt: string;
    __v: number
}

export interface IMockFetchResponseData {
    flashcard: IFlashcard
}

type Props = IMockFetchResponseData | CardType[]

export function createFetchResponse(data: Props, status: boolean) {
    return  {
        json: () => new Promise((resolve) => resolve(data)),
        ok: status
    }
}

export function createErrorResponse(){
    return  {
        status: 500,
        ok: false
    }
}

export const MOCK_CARDS = [
    { _id: "asfasv", front: "Marko", back: "Polo" },
    { _id: "sdczdc", front: "Marko", back: "Polo" },
    { _id: "sdcsd6", front: "Marko", back: "Polo" },
];