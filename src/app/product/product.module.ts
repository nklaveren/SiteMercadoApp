import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "../shared/shared.module";
import { ProductAppComponent } from "./product.app.component";
import { ListAllComponent } from "./list-all/list-all.component";
import { productRoutingModule } from "./product.route";
import { CreateComponent } from './create/create.component';
import { CreateProductService, GetAllProductsService, GetByIdProductService, RemoveProductService, UpdateProductService } from "./services";
import { UpdateComponent } from "./update/update.component";
import { ProductGuard } from "./services/product-guard";
import { UpdateResolver } from "./update/update.resolver";
import { ListAllResolve } from "./list-all/list-all.resolver";


@NgModule({
  declarations: [
    ProductAppComponent,
    ListAllComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    productRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    CreateProductService,
    RemoveProductService,
    GetByIdProductService,
    UpdateProductService,
    UpdateResolver,
    GetAllProductsService,
    ListAllResolve,
    ProductGuard
  ]
})
export class ProductModule { }
