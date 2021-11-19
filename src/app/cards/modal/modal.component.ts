import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardService } from '../card.service';
import { NotificationService } from '../../shared/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  cardForm: FormGroup;

  constructor(
    private cardService: CardService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.cardForm = this.formBuilder.group({
      title: [this.data.title || ''],
      description: [this.data.description || ''],
      status: [this.data.status || '']
    });
  }

  onSubmit(): void {
    if (this.data.id) {
      this.cardService.updateCard({id: this.data.id, ...this.cardForm.value});
    } else {
      this.cardService.addCard(this.cardForm.value);
    }
    this.notificationService.success('Added Successfully');
    this.dialogRef.close();
  }

}
