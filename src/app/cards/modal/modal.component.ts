import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  cardForm: FormGroup;

  constructor(
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
      title: [this.data.title || '', [Validators.required]],
      description: [this.data.description || '', [Validators.required]],
      status: [this.data.status || '', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.cardForm.invalid) {
      this.notificationService.error('Please fill correct details');
      return;
    }
    if (this.data.id) {
      this.dialogRef.close({id: this.data.id, ...this.cardForm.value});
    } else {
      this.dialogRef.close(this.cardForm.value);
    }
  }

}
