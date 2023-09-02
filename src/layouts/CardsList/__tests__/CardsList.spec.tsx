import { describe, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { CardsContextProvider } from '../../../context/CardsContext';
import CardsList from '../CardsList';
import { MOCK_CARDS, createFetchResponse } from '../../../test/createFetchResponse';

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