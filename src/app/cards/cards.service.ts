import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = [
    new Card(1, 'todo 1', 'this is a description', 'todo'),
    new Card(2, 'doing 1', 'this is a description', 'doing'),
    new Card(3, 'done 1', 'this is a description', 'done'),
  ];
  todoCards = [];
  doingCards = [];
  doneCards = [];

  constructor() { }

  filterCards(): void {
    this.todoCards = this.cards.filter(item => item.status === 'todo');
    this.doingCards = this.cards.filter(item => item.status === 'doing');
    this.doneCards = this.cards.filter(item => item.status === 'done');
  }
}
