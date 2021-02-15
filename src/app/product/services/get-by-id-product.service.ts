import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class GetByIdProductService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  handle(id: number) {
    const url = this.UrlService + 'product/' + id;
    const response = this.httpClient.get(url, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));

    return response;
  }
}
