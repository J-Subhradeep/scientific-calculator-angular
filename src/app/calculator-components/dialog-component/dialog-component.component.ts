import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  value = 0;
  @Input() scientificOperator = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  onValueChange(val: any) {
    this.value = parseFloat(val);
  }
}
