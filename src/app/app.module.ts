import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorComponentsModule } from './calculator-components/calculator-components.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    CalculatorComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
