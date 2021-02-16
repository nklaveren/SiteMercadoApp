import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/components/base-form.component';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';
import { LoginModel } from '../models/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

  loginForm: FormGroup;
  login: LoginModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService,
    protected fb: FormBuilder
  ) {
    super(fb, {
      username: {
        required: 'Informe o usuário',
      },
      password: {
        required: 'Informe a senha'
      }
    })
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  protected currentForm(): FormGroup {
    return this.loginForm;
  }

  handleLogin() {
    if (!this.isFormValid()) {
      return;
    }
    this.isLoading = true;
    this.login = Object.assign(<LoginModel>{}, this.login, this.loginForm.value)
    this.loginService.handle(this.login)
      .subscribe(
        data => {
          this.isLoading = false;
          if (data.success && data.token) {
            this.userService.saveToken(data.token);
            const { returnUrl } = this.route.snapshot.queryParams;
            this.router.navigate([returnUrl || '/home'])
          } else {
            this.errors = [data.error];
          }
        },
        error => {
          this.isLoading = false;
          this.errors = error.error.errors;
        },
      )
  }
}
