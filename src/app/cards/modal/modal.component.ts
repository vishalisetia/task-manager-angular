import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CardService } from '../../shared/card.service';
import { NotificationService } from '../../shared/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../card.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  id: number;
  editMode = false;
  cardForm: FormGroup;

  constructor(
    private cardService: CardService,
    private dataStorageService: DataStorageService,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public card: Card) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let cardTitle = '';
    let cardDescription = '';
    let cardStatus = '';
    if (this.editMode) {
      const card = this.cardService.getCard(this.id);
      cardTitle = card.title;
      cardDescription = card.description;
      cardStatus = card.status;
    }
    this.cardForm = new FormGroup({
      'title': new FormControl(cardTitle),
      'description': new FormControl(cardDescription),
      'status': new FormControl(cardStatus)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.cardService.updateCard(this.id, this.cardForm.value);
    } else {
      this.cardService.addCard(this.cardForm.value);
    }
    this.dataStorageService.storeCards();
    this.notificationService.success('Added Successfully');
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }

}
