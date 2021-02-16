import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductModel } from '../models/product.model';
import { RemoveProductService } from '../services';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements AfterViewInit {
  products: ProductModel[]
  errors: any[] = []
  messages: any[] = []
  showModal = false
  productId: number

  showConfirm(id) {
    this.productId = id;
    this.showModal = true;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private removeService: RemoveProductService,
    private loaderService: LoaderService
  ) {
    this.products = this.route.snapshot.data['products'] || []
  }
  ngAfterViewInit(): void {
    this.loaderService.hide();
  }

  edit(id: number) {
    this.router.navigate(['/product/' + id]);
  }

  remove(id) {
    this.showModal = false;
    this.loaderService.show();
    const prod = this.products.find(x => x.id === id);
    this.removeService.handle(id)
      .subscribe(
        () => {
          if (this.products.length) {

            this.messages = [`produto ${prod.description} removido com sucesso`]
            this.products = [...this.products.filter(x => x !== prod)]
            this.loaderService.hide();
          } else
            this.products = null
        },
        data => {
          this.errors = data.error?.errors || data
          this.loaderService.hide();
        }
      )
  }
}
