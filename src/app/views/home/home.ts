import { Component, inject, signal } from '@angular/core';
import { AuthGoogleService } from '../../services/google/oauth/auth-google.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private readonly _authService = inject(AuthGoogleService);
  private readonly _router = inject(Router);
  profile = signal<any>({});

  constructor(){
    this.profile.set(this._authService.profile())
  }

  logOut(){
    this._authService.logout();
    this._router.navigate(['/login']);
  }
   
}
