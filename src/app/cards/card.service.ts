import { Card } from './card.model';

export class CardService {

    private cards: Card[] = [
        new Card(1, 'todo 1', 'this is a description', 'todo'),
        new Card(2, 'doing 1', 'this is a description', 'doing'),
        new Card(3, 'done 1', 'this is a description', 'done'),
    ];

    getCards(): Card[] {
        return this.cards;
    }

    updateCard(data): void {
    }

    addCard(data): void {
        this.cards.push(new Card(this.cards.length + 1, data.title, data.description, data.status));
    }
}
