import {Component , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tabs-template-label-example',
  templateUrl: 'tabs-template-label-example.html',
  styleUrls: ['./tabs-template-label-example.css'],
  encapsulation : ViewEncapsulation.None
})
export class MatTabOverviewComponent {

  logChange($event) {
    console.log("Index:",$event);
  }
}