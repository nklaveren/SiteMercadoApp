import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { LoaderService } from "./loader.service";
import { UserService } from "./user.service";

export abstract class BaseService {
  protected UrlService: string = environment.urlApi

  constructor() { }

  protected ObterHeaderJson() {
    var token = JSON.parse(localStorage.getItem('token'));
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
  }

  protected extractData(response: any) {
    return response || {};
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    if (response instanceof HttpErrorResponse) {
      if (response.statusText === "Unknown Error") {
        customError.push("Ocorreu um erro desconhecido");
        response.error.errors = customError;
      } else if (response.status === 401) {
        customError.push("usuário ou senha inválido");
        UserService.logout()
        if (!response.error) {
          return throwError(customError)
        }
        response.error.errors = customError;
      }
    }
    console.error(response);
    return throwError(response);
  }

}
