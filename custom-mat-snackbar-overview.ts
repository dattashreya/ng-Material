import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
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

  openCustom() {
    this.matSnackBar.openFromComponent(OverviewExample, {duration: 2000});
  }
}

@Component({
  selector: 'overview-example',
  template: `
  <span style="color: red">
    Custom
  </span>
  `
})
export class OverviewExample {

}
