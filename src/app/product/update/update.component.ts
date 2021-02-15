import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/components/base-form.component';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductModel } from '../models/product.model';
import { GetByIdProductService, UpdateProductService } from '../services';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent extends BaseFormComponent implements OnInit {
  productForm: FormGroup;
  product: ProductModel;

  constructor(protected fb: FormBuilder,
    private updateProductService: UpdateProductService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService
  ) {
    super(fb, {
      description: {
        required: 'Informe a descrição',
      },
      price: {
        required: 'Informe o preço'
      }
    })
    this.product = this.route.snapshot.data['product']
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [''],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['']
    })
    this.productForm.patchValue(this.product);
  }

  ngAfterViewInit(): void {
    this.registerOnBlur(this.currentForm());
    this.loaderService.hide();
  }


  handleUpdate() {
    if (!this.isFormValid()) return
    this.isLoading = true
    this.clearMessages()
    this.product = Object.assign(<ProductModel>{}, this.product, this.productForm.value)
    this.updateProductService.handle(this.product)
      .pipe(tap(() => {
      })).subscribe(
        (data) => this.handleSuccess(),
        (data) => this.handleError(data)
      );

  }

  handleSuccess() {
    this.isLoading = false
    this.unsavedChanges = false
    this.messages.push(`produto ${this.product.description} atualizado com sucesso`);
  }

  handleError(data) {
    this.isLoading = false
    this.errors = data.error ? data.error : data;
  }

  protected currentForm(): FormGroup {
    return this.productForm;
  }
}
