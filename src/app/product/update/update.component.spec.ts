import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { ProductModule } from '../product.module';

import { UpdateComponent } from './update.component';

const httpMock = {
  post: () => { }
}
const routeMock: any = {
  snapshot: {
    data: {
      product: <ProductModel>{
        id: 1,
        description: 'test',
        image: 'url',
        price: 10.99
      }
    }
  }
};
const routerMock = {
  navigate: ([]) => { }
}

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: HttpClient, useValue: httpMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: routerMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
