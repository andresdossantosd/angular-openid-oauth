import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly _auth = inject(Auth)

  sso(){
    console.log('SSO');
  }
  
}
