import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputText,
    Password,
    Button,
    Card
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  users = [
    { username: 'admin', password: '12345' }
  ];

  constructor(private router: Router) {}

  doLogin() {
    const foundUser = this.users.find(
      user =>
        user.username === this.username &&
        user.password === this.password
    );

    if (foundUser) {
      this.router.navigate(['/home']);
    } else {
      alert('Credenziali errate');
    }
  }
}
