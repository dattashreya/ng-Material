import { Component, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "hello",
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  name: string;
  constructor(
    private _mdr: MatDialogRef<HelloComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    this.name = data.name;
  }
  CloseDialog() {
    this._mdr.close(false)
  }
}
