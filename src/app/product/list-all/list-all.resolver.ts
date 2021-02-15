import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { LoaderService } from "src/app/services/loader.service";
import { ProductModel } from "../models/product.model";
import { GetAllProductsService } from "../services";



@Injectable()
export class ListAllResolve implements Resolve<ProductModel[]>{

  constructor(
    private getAll: GetAllProductsService,
    private loaderService: LoaderService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    this.loaderService.show();
    return this.getAll.handle()
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
  }
}
