import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'mat-snackbar-overview',
  templateUrl: 'mat-snackbar-overview.html',
  styleUrls: ['mat-snackbar-overview.css'],
})
export class MatSnackbarOverviewComponent {
  constructor(private snakbar : MatSnackBar) {}
  openSnackBar(message) {
    this.snakbar.open(message);
  }
  // dismiss options
  openSnackBar2(message, action) {
    this.snakbar.open(message, action);
  }
}
// ----------------------------------------------------------------------
// for Undo operation

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample {
  constructor(private snakbar: MatSnackBar) {}
  openSnacckBar(message) {
    let snackBarRef = this.snakbar.open(message);

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('dismissed...');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('onAction was triggerred...');
    });
  }
}
