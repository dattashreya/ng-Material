import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'mat-snackbar-duration-props-overview',
  templateUrl: 'mat-snackbar-duration-props-overview.html',
  styleUrls: ['mat-snackbar-duration-props-overview.css'],
})
export class MatSnackBarDurPropsOverviewExample {
  panelOpenState = false;
  constructor(private matSnackBar: MatSnackBar) {}

  openSnackBarMethod(message: any, action: any) {
    this.matSnackBar.open(message, action);
  }
  openParty(message: any, action: any) {
    let matSnackBarRef = this.matSnackBar.open(message, action, {duration: 2000});

    matSnackBarRef.onAction().subscribe(() => {
      console.log('undo opration done...')
    });
  }
}

