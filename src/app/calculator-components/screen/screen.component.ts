import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
  @Input() expression = "";
  @Output() appendS = new EventEmitter()
  changeHandler(event: any) {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '.', '+', '-', '*', '/'].includes(event.key)) this.appendS.emit(event.key);
    event.target.value = this.expression;


  }
}
