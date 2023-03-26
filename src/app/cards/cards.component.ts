import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Card } from '../model/card.model';
import { NotificationService } from '../services/notification.service';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any;
  todoCards = [];
  doingCards = [];
  doneCards = [];

  types = [
    {
      label: 'Todo',
      key: 'todo',
      arr: this.todoCards
    },
    {
      label: 'Doing',
      key: 'doing',
      arr: this.doingCards
    },
    {
      label: 'Done',
      key: 'done',
      arr: this.doneCards
    }
  ];

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    public cardsService: CardsService,
    ) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => {
      this.cards = res;
      this.types[0].arr = this.todoCards = this.cards.filter(item => item.status === 'todo');
      this.types[1].arr = this.doingCards = this.cards.filter(item => item.status === 'doing');
      this.types[2].arr = this.doneCards = this.cards.filter(item => item.status === 'done');
    });
  }

  onNewCard(status): void {
    const dialog = this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        status
      }
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        // const temp = new Card(this.cardsService.cards.length + 1, data.title, data.description, data.status);
        // this.cardsService.cards.push(temp);
        this.notificationService.success('Added Successfully');
        // this.cardsService.filterCards();
      }
    });
  }

  onRefresh() {
    
  }

}
