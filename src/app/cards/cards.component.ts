import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Card } from './card.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [
    new Card(1, 'todo 1', 'this is a description', 'todo'),
    new Card(2, 'doing 1', 'this is a description', 'doing'),
    new Card(3, 'done 1', 'this is a description', 'done'),
  ];
  todoCards = [];
  doingCards = [];
  doneCards = [];

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.filterCards();
  }

  filterCards(): void {
    this.todoCards = this.cards.filter(item => item.status === 'todo');
    this.doingCards = this.cards.filter(item => item.status === 'doing');
    this.doneCards = this.cards.filter(item => item.status === 'done');
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
        if (data.id) {
          this.cards.forEach(card => {
            if (card.id === data.id) {
              card.title = data.title;
              card.description = data.description;
              card.status = data.status;
              this.notificationService.success('Updated Successfully');
            }
          });
        } else {
          this.cards.push(new Card(this.cards.length + 1, data.title, data.description, data.status));
          this.notificationService.success('Added Successfully');
        }
        this.filterCards();
      }
    });
  }

}
