import { describe, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createFetchResponse, createErrorResponse } from '../../../test/createFetchResponse';
import App from '../../../App';

const MOCK_POST_CARD = {
	flashcard: {
		front: "Marko",
		back: "Polo",
		_id: "64f2718561a3fbbde1e9c4a4",
        createdAt: "2023-09-01T23:19:33.078Z",
		updatedAt: "2023-09-01T23:19:33.078Z",
		__v: 0
	}
};

describe('Test adding flashcard', () => {

    it('It should be possible to add a flashcard when front, and back values are present', async () => {

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse([], true));

        render(<App />);
        
        const addButton = screen.getByTestId("add-button");
        userEvent.click(addButton);
        const textareaFields = await screen.findAllByTestId('textarea');
        userEvent.type(textareaFields[0], 'Marko');
        userEvent.type(textareaFields[1], 'Polo');
        
        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_POST_CARD, true));

        const saveButton = screen.getByRole("button", { name: /Save/i});
        fireEvent.click(saveButton);
        
        await waitFor(() => {
            expect(screen.getAllByText("Marko").length).toBe(1);
        });
    });

    it('It should not be possible to add a flashcard when front or back card value is empty', async () => {

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse([], true));

        render(<App />);
        
        const addButton = screen.getByTestId("add-button");
        userEvent.click(addButton);
        await screen.findAllByTestId('textarea');
        
        global.fetch = vi.fn().mockResolvedValue(createErrorResponse());

        const saveButton = screen.getByRole("button", { name: /Save/i});
        fireEvent.click(saveButton);

        const cardsList = screen.getByTestId("cards-list");

        await waitFor(() => {
            expect(cardsList.childNodes.length).toBe(0);
        });
    });
});