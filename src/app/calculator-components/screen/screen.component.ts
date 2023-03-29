import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
  @Input() expression = "";
  @Output() appendS = new EventEmitter();
  @Output() delOperation = new EventEmitter<string>();
  changeHandler(event: any) {
    console.log(event.key == "Backspace");
    if (event.key == "Backspace") {
      this.delOperation.emit();
      return;
    }
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '.', '+', '-', '*', '/', "%", "^"].includes(event.key)) this.appendS.emit(event.key);
    event.target.value = this.expression;


  }
  handleString(value: string) {
    return value.toString().replace("asin", "sin^-1").replace("acos", "cos^-1").replace("atan", "tan^-1").replace("acot", "cot^-1").replace("asec", "sec^-1").replace("acsc", "cosec^-1")
  }
}
