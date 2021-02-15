import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDefaultComponent } from './btn-default.component';

describe('BtnDefaultComponent', () => {
  let component: BtnDefaultComponent;
  let fixture: ComponentFixture<BtnDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
