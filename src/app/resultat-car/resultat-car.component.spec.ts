import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCarComponent } from './resultat-car.component';

describe('ResultatCarComponent', () => {
  let component: ResultatCarComponent;
  let fixture: ComponentFixture<ResultatCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
