import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbookingComponent } from './hotelbooking.component';

describe('HotelbookingComponent', () => {
  let component: HotelbookingComponent;
  let fixture: ComponentFixture<HotelbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
