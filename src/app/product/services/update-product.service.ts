import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class UpdateProductService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  handle(product: ProductModel) {
    const url = this.UrlService + 'product/' + product.id;
    const response = this.httpClient.put(url, product, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));

    return response;
  }
}
