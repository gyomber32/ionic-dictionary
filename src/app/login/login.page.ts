import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onLogin(loginForm: NgForm): void {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    this.authService.login(email, password);

  }

}
