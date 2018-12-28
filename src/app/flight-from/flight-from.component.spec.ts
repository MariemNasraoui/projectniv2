import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFromComponent } from './flight-from.component';

describe('FlightFromComponent', () => {
  let component: FlightFromComponent;
  let fixture: ComponentFixture<FlightFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
