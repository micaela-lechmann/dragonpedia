import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public isCredentialsWrong = false;
  public usernameErrorMessages= {
    "required": "Please, enter your username"
  };
  public passwordErrorMessages= {
    "required": "Please, enter your password"
  };

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } 

    const user: User = {
      password: this.loginForm.get('password').value,
      username: this.loginForm.get('username').value
    } 

    if(this.authService.login(user)) {
      this.isCredentialsWrong = false;
      this.router.navigate(['/dragon/home']);
    } else {
      this.isCredentialsWrong = true;
    }
  }

}
