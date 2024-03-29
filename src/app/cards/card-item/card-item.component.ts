import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/card.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NotificationService } from 'src/app/services/notification.service';
import { CardsService } from '../../services/cards.service';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() cardItem: Card;
  // @Output() refresh = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    public cardsService: CardsService
  ) { }

  ngOnInit(): void {
  }

  onEditCard(): void {
    const dialog = this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        id: this.cardItem.id,
        title: this.cardItem.title,
        description: this.cardItem.description,
        status: this.cardItem.status,
      }
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        // this.cardsService.cards.forEach(card => {
        //   if (card.id === data.id) {
        //     card.title = data.title;
        //     card.description = data.description;
        //     card.status = data.status;
        //     this.notificationService.success('Updated Successfully');
        //     this.cardsService.filterCards();
        //   }
        // });
      }
    });
  }

  onDeleteCard(): void {
    const dialog = this.dialog.open(ConfirmComponent, {
      data: {
        confirmMessage: 'Are you sure want to delete this task ?'
      }
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.cardsService.deleteCard(this.cardItem.id).subscribe(res => {
          console.log(res, '------res');
          this.notificationService.success('Deleted Successfully');
          // this.refresh.emit(true);
        });
      }
    });    

    // const index = this.cardsService.cards.indexOf(this.cardItem);
    // this.cardsService.cards.splice(index, 1);
    // this.cardsService.filterCards();
  }
}
