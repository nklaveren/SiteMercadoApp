import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllComponent } from './list-all.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoveProductService } from '../services';

const httpMock = {
  post: () => { }
}
const routeMock: any = {
  snapshot: {
    data: []
  }
};

const routerMock: any = { navigate: () => { } };

describe('ListAllComponent', () => {
  let component: ListAllComponent;
  let fixture: ComponentFixture<ListAllComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: HttpClient, useValue: httpMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: routerMock },
        { provide: RemoveProductService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
