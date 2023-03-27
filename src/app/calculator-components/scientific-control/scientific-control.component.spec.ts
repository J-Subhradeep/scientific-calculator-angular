import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificControlComponent } from './scientific-control.component';

describe('ScientificControlComponent', () => {
  let component: ScientificControlComponent;
  let fixture: ComponentFixture<ScientificControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
