import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() cardItem: Card;
  @Input() index: number;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEditCard() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {
      title: this.cardItem.title,
      description: this.cardItem.description,
      status: this.cardItem.status
    };
    this.dialog.open(ModalComponent, dialogConfig);
  }
}
