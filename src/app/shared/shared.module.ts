import { NgModule } from "@angular/core";
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { BtnDefaultComponent } from './btn-default/btn-default.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    BtnDefaultComponent,
    AlertErrorComponent,
    AlertSuccessComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    BtnDefaultComponent,
    AlertErrorComponent,
    AlertSuccessComponent,
    LoaderComponent
  ]
})
export class SharedModule {

}
