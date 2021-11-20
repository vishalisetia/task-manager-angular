import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/card.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() cardItem: Card;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEditCard(): void {
    const dialog = this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        id: this.cardItem.id,
        title: this.cardItem.title,
        description: this.cardItem.description,
        status: this.cardItem.status
      }
    });
  }
}
