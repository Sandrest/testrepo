import {Component} from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialog {
  constructor(public dialog:MatDialogRef<DeleteDialog> ) {}



  onClose(): void {
    this.dialog.close();
  }
}