import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoaderService } from "src/app/services/loader.service";
import { ProductModel } from "../models/product.model";
import { GetByIdProductService } from "../services";


@Injectable()
export class UpdateResolver implements Resolve<ProductModel> {
  constructor(private getByIdProductService: GetByIdProductService,
    private loaderService: LoaderService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    this.loaderService.show();
    return this.getByIdProductService.handle(route.params['id'])
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(null)
        })
      );
  }

}
