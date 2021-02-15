import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AccountRoutingModule } from "./account.route";
import { LoginComponent } from "./login/login.component";
import { AccountAppComponent } from "./account.app.component";
import { SharedModule } from "../shared/shared.module";
import { LoginService } from "./services/login.service";

@NgModule({
  declarations: [
    AccountAppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    LoginService
  ]
})
export class AccountModule { }
