import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as math from 'mathjs';
import { DialogComponentComponent } from '../calculator-components/dialog-component/dialog-component.component';
import { getExpressionFromOperator, operatorResolver } from './operatorResolver';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  checked = false;
  expression = "";
  result = "";
  scientificOperator = "";
  toggleParent(value: any) {
    console.log(value);
    this.checked = value;
  }
  appendString(value: any) {
    this.expression = this.expression + value;
  }
  clearString() {
    console.log(this.expression);

    this.expression = ""
  }
  evaluateExp() {
    this.expression = math.evaluate(this.expression);
  }
  constructor(public dialog: MatDialog) { }
  openDialog() {
    let dialogRef = this.dialog.open(DialogComponentComponent, { data: { operator: operatorResolver(this.scientificOperator) } });
    dialogRef.afterClosed().subscribe((result) => {
      let arr = result.split(",");
      let value = arr[0];
      let op = arr[1];
      console.log(arr);
      if (op === 'nth root of x') this.appendString(getExpressionFromOperator(value, op, arr[2]));
      else {

        console.log(getExpressionFromOperator(value, op));
        this.appendString(getExpressionFromOperator(value, op))
      }
      // if()

    })
  }
  setScientificOperator(value: string) {
    this.scientificOperator = value;
  }
}
