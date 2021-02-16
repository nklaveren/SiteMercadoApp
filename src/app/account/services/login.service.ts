import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BaseService } from "src/app/services/base.service";
import { LoginResponseModel } from "../models/login-response.model";
import { LoginModel } from "../models/login.model";


@Injectable()
export class LoginService extends BaseService {
  constructor(
    private http: HttpClient

  ) {
    super()
  }


  handle(login: LoginModel): Observable<LoginResponseModel> {
    var response = this.http.post(this.UrlService + 'login', login, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));

    return response;
  }


}
