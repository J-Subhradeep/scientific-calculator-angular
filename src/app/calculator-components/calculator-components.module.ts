import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ScientificControlComponent } from './scientific-control/scientific-control.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldAppearance, matFormFieldAnimations, MatFormField } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ScreenComponent,
    ButtonsComponent,
    ScientificControlComponent
  ],
  imports: [
    CommonModule, MatInputModule, MatButtonModule, BrowserAnimationsModule, FormsModule, MatIconModule
  ],
  exports: [
    ScreenComponent,
    ButtonsComponent,
    ScientificControlComponent,

  ]
})
export class CalculatorComponentsModule { }
