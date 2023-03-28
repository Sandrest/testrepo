import {Component} from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
})
export class SuccessDialog {
  constructor(public dialog:MatDialogRef<SuccessDialog> ) {}



  onClose(): void {
    this.dialog.close();
  }
}