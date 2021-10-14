import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from './card.model';
import { CardService } from '../shared/card.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent implements OnInit, OnDestroy {
  cards: Card[];
  todoCards: Card[];
  doingCards: Card[];
  doneCards: Card[];
  subscription: Subscription;

  constructor(private cardService: CardService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.cardService.cardsChanged
      .subscribe((cards: Card[]) => {
        this.cards = cards;
      });
    this.todoCards = this.cardService.getCardsByStatus('todo');
    this.doingCards = this.cardService.getCardsByStatus('doing');
    this.doneCards = this.cardService.getCardsByStatus('done');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
