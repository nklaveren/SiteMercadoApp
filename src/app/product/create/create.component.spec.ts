import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModule } from '../product.module';

import { CreateComponent } from './create.component';
const httpMock = {
  post: () => { }
}
const routeMock: any = { snapshot: {} };

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: HttpClient, useValue: httpMock },
        { provide: ActivatedRoute, useValue: routeMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
