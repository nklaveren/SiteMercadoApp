import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class GetAllProductsService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  handle(): Observable<ProductModel> {
    const response = this.httpClient.get(
      this.UrlService + 'product', this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );

    return response;
  }
}
