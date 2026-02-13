import {Component , ViewEncapsulation} from '@angular/core';

/**
 * @title Complex Example
 */
@Component({
  selector: 'mat-autocomplete-overview',
  templateUrl: 'mat-autocomplete-overview.html',
  styleUrls: ['./mat-autocomplete-overview.css'],
  encapsulation : ViewEncapsulation.None
})
export class MatAutocompleteOverviewComponent {
  options: string[] = [
    'Angular',
    'raect',
    'Vue'
  ];
  objectOptions = [
    { name: 'Angular'},
    { name: 'raect'},
    { name: 'Vue'},
    { name: 'UI'},
  ];
  displayFn(subject) {
    return subject ? subject.name : undefined;
  }
}