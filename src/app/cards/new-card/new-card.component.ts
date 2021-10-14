import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
})
export class NewCardComponent {
  constructor(private dialog: MatDialog) { }

  onNewCard() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ModalComponent, dialogConfig);
  }
}