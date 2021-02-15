import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { BaseFormComponent } from "src/app/components/base-form.component";
import { UserService } from "src/app/services/user.service";
import { CreateComponent } from "../create/create.component";


@Injectable()
export class ProductGuard implements CanDeactivate<BaseFormComponent> {

  canDeactivate(component: CreateComponent) {
    if (component.unsavedChanges) {
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
    }
    return true;
  }

}
