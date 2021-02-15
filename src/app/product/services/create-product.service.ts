import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { catchError, map } from 'rxjs/operators'
import { BaseService } from "src/app/services/base.service";

@Injectable()
export class CreateProductService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  handle(product: ProductModel) {
    const response = this.httpClient.post(
      this.UrlService + 'product', product, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));

    return response;
  }
}
