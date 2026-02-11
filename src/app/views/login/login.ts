import { Component, inject } from '@angular/core';
import { AuthGoogleService } from '../../services/google/oauth/auth-google.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  
  private readonly _authService = inject(AuthGoogleService);

  oauth(){
    console.log('Sign in with Google !');
    this._authService.login();
  }
  
}
