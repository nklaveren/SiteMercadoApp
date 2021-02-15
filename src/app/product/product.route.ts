import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ListAllComponent } from "./list-all/list-all.component";
import { ListAllResolve } from "./list-all/list-all.resolver";
import { ProductAppComponent } from "./product.app.component";
import { ProductGuard } from "./services/product-guard";
import { UpdateComponent } from "./update/update.component";
import { UpdateResolver } from "./update/update.resolver";

const productRouterConfig: Routes = [
  {
    path: '', component: ProductAppComponent,
    children: [
      { path: 'create', component: CreateComponent, canDeactivate: [ProductGuard] },
      {
        path: ':id', component: UpdateComponent, canDeactivate: [ProductGuard], resolve: {
          product: UpdateResolver
        }
      },
      {
        path: '', component: ListAllComponent, resolve: {
          products: ListAllResolve
        }
      },
    ],
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(productRouterConfig)
  ],
  exports: [RouterModule]
})
export class productRoutingModule {

}
