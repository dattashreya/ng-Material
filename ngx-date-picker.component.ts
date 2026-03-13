import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateTime } from 'ts-luxon';

@Component({
  selector: 'my-datepicker-ngx-app',
  templateUrl: './ngx-date-picker.component.html',
  styleUrls: ['./ngx-date-picker.component.scss'],
})
export class AppComponent {
  formControlItem: FormControl = new FormControl('');
  maxTime: DateTime = DateTime.local().set({
    hour: 16,
  });
  minTime: DateTime = DateTime.local().set({
    hour: 14,
  });
  required: boolean = !1;
  @ViewChild('timepicker') timepicker: any;
  openFromIcon(timepicker: { open: () => void }) {
    if (!this.formControlItem.disabled) {
      timepicker.open();
    }
  }
  onClear($event: Event) {
    this.formControlItem.setValue(null);
  }
}
