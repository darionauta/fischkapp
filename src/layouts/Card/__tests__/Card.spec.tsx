import { describe, expect, vi } from "vitest";
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createErrorResponse, createFetchResponse, MOCK_CARDS } from "../../../test/createFetchResponse";
import App from "../../../App";

describe('Test editing flashcard', () => {

    it('It should not be possible to edit a flashcard by clicking Save button when edited value is empty', async () => {

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_CARDS, true));

        render( <App />);

        const editButton = await screen.findAllByTestId('edit-button');
        userEvent.click(editButton[0]);
        const textareaFields = await screen.findAllByTestId('textarea');
        fireEvent.change(textareaFields[0], { target: { value: ''}});
        const saveButton = await screen.findByRole("button", { name: /Save/i});
        fireEvent.click(saveButton);

        global.fetch = vi.fn().mockResolvedValue(createErrorResponse());

        const resultCards = screen.queryAllByText("Marko").length;

        await waitFor(() => {
            expect(resultCards).toBe(3);
        });
    });

    it('It should be possible to edit a flashcard by clicking Save button when edited value is not empty', async () => {

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_CARDS, true));

        render( <App />);

        const editButton = await screen.findAllByTestId('edit-button');
        userEvent.click(editButton[0]);
        const textareaFields = await screen.findAllByTestId('textarea');
        fireEvent.change(textareaFields[0], { target: { value: "Dariusz"}});
        const saveButton = await screen.findByRole("button", { name: /Save/i});
        fireEvent.click(saveButton);

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse([], true));

        await waitFor(() => {
            expect(screen.queryByText("Dariusz")).toBeInTheDocument();
        });
    });

    it('It should be possible to exit editing mode by clicking cancel button', async () => {

        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_CARDS, true));
        
        render( <App />);
        
        const editButton = await screen.findAllByTestId('edit-button');
        userEvent.click(editButton[0]);
        const cancelButton = await screen.findAllByRole("button", { name: /Cancel/i});
        fireEvent.click(cancelButton[0]);

        await waitFor(() => {
            expect(screen.queryAllByTestId('edit-element').length).toBe(0);
        });
    });

    it('Should delete flashcard from the list when clicking on Trash icon', async () => {
        
        global.fetch = vi.fn().mockResolvedValue(createFetchResponse(MOCK_CARDS, true));
        
        vi.spyOn(window, 'alert').mockImplementation(() => {});

        render( <App />);

        const editButton = await screen.findAllByTestId('edit-button');
        userEvent.click(editButton[0]);
        const deleteButton = await screen.findByTestId('delete-button');
        fireEvent.click(deleteButton);
        
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledOnce();
        });
    });
});