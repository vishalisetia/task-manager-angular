import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Card } from '../model/card.model';
import { NotificationService } from '../services/notification.service';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    public cardsService: CardsService,
    ) { }

  ngOnInit(): void {
    this.cardsService.filterCards();
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
        const temp = new Card(this.cardsService.cards.length + 1, data.title, data.description, data.status);
        this.cardsService.cards.push(temp);
        this.notificationService.success('Added Successfully');
        this.cardsService.filterCards();
      }
    });
  }

}
