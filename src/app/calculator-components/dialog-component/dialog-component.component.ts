import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {

  @Input() scientificOperator = "";
  value = { value: 0, operator: this.data.operator ,value2 :0};
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  onValueChange(val: any) {
    this.value.value = parseFloat(val)?parseFloat(val):0;
  }
  onValueChange2(val:any){
    this.value.value2 = parseFloat(val)?parseFloat(val):0;
  }
}
