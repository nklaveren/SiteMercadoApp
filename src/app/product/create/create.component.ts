import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/components/base-form.component';
import { ProductModel } from '../models/product.model';
import { CreateProductService } from '../services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent extends BaseFormComponent implements OnInit {
  productForm: FormGroup;
  product: ProductModel;

  constructor(
    protected fb: FormBuilder,
    private createProductService: CreateProductService
  ) {
    super(fb, {
      description: {
        required: 'Informe a descrição',
      },
      price: {
        required: 'Informe o preço'
      }
    })
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['']
    })
  }

  handleCreate() {
    this.clearMessages()
    if (!this.isFormValid()) return
    this.isLoading = true
    this.product = Object.assign(<ProductModel>{}, this.product, this.productForm.value)
    this.createProductService.handle(this.product)
      .pipe(tap(() => {
      })).subscribe(
        (data) => this.handleSuccess(),
        (data) => this.handleError(data)
      )
  }

  handleSuccess() {
    this.isLoading = false
    this.unsavedChanges = false
    this.messages.push(`produto ${this.product.description} adicionado com sucesso`)
  }

  handleError(data) {
    this.isLoading = false
    const result = data.error?.errors?.includes('product alread exists')
    if (result) {
      this.errors = ["Produto já existe"]
    } else
      this.errors = data.error?.errors || data 
  }

  protected currentForm(): FormGroup {
    return this.productForm;
  }
}
