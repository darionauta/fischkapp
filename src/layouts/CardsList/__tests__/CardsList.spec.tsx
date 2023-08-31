import { render, screen } from '@testing-library/react';
import CardsList from '../CardsList';
import Card from '../../Card/Card';

describe('Test displaying flashcards', () => {
    it('should contain at least one child element', () => {
        
        const mockCards = [
            { _id: "asfasv", front: "Marko", back: "Polo" },
            { _id: "sdczdc", front: "Marko", back: "Polo" },
            { _id: "sdcsd6", front: "Marko", back: "Polo" },
        ];
        
        render(
            <CardsList>
                { mockCards.map((card, index) => <Card key={index} card={mockCards[index]} />)}                
            </CardsList>
        );
        expect(screen.getAllByText("Marko").length).toBe(3);
    });
});