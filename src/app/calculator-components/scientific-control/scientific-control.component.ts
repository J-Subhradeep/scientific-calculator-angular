import { Component,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-scientific-control',
  templateUrl: './scientific-control.component.html',
  styleUrls: ['./scientific-control.component.css']
})
export class ScientificControlComponent{
  checked = false;
  @Output() toggle = new EventEmitter<boolean>();
  handleControlChange(element: any) {
    this.toggle.emit(element.checked);
    this.checked = element.checked;
  }
}
