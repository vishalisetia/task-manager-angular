import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  snackBarConfig: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  }

  success(msg: any) {
    this.snackBar.open(msg, '', this.snackBarConfig);
  }

}
