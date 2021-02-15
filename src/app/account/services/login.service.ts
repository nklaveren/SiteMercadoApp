import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { BaseService } from "src/app/services/base.service";
import { LoginModel } from "../models/LoginModel";


@Injectable()
export class LoginService extends BaseService {
  constructor(
    private http: HttpClient

  ) {
    super()
  }


  handle(login: LoginModel) {
    var response = this.http.post(this.UrlService + 'login', login, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));

    return response;
  }


}
