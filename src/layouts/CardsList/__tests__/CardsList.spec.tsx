import { describe, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { CardType } from '../../Card/types';
import { CardsContextProvider } from '../../../context/CardsContext';
import CardsList from '../CardsList';

const MOCK_CARDS = [
    { _id: "asfasv", front: "Marko", back: "Polo" },
    { _id: "sdczdc", front: "Marko", back: "Polo" },
    { _id: "sdcsd6", front: "Marko", back: "Polo" },
];

function createFetchResponse(data: CardType[], status: boolean) {
    return  {
        json: () => new Promise((resolve) => resolve(data)),
        ok: status
    }
}


describe('Test displaying flashcards', () => {
    it('should contain list of cards', async () => {
        
        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_CARDS, true));
        render(
            <CardsContextProvider>
                <CardsList />
            </CardsContextProvider>
        );
        await waitFor(() => {
            expect(screen.getAllByText("Marko").length).toBe(3);
        });
    });

    it('should contain error information when is fetch error', async () => {
        
        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_CARDS, false));

        render(
            <CardsContextProvider>
                <CardsList />
            </CardsContextProvider>
        );
        await waitFor(() => {
            expect(screen.getByText("Fetch error")).toBeInTheDocument();
        });
    });
});