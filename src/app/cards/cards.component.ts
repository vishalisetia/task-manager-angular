import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent implements OnInit, OnDestroy {

  todoCards = [];
  doingCards = [];
  doneCards = [];

  constructor(
    public cardService: CardService,
    private dialog: MatDialog) { }

  dhuh(): void {
    this.todoCards = this.cardService.getCards().filter(item => item.status === 'todo');
    this.doingCards = this.cardService.getCards().filter(item => item.status === 'doing');
    this.doneCards = this.cardService.getCards().filter(item => item.status === 'done');
  }
  ngOnInit(): void {
    this.dhuh();
  }

  onNewCard(status): void {
    const dialog = this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        status
      }
    });
  }

  ngOnDestroy(): void {
  }

}
