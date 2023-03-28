import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
  @Input() expression = "";
  @Output() change = new EventEmitter<string>()
  changeHandler(value: string) {
    console.log(value);

    this.change.emit(value);
  }
}
