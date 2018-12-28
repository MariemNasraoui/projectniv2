import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatHotelComponent } from './resultat-hotel.component';

describe('ResultatHotelComponent', () => {
  let component: ResultatHotelComponent;
  let fixture: ComponentFixture<ResultatHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
