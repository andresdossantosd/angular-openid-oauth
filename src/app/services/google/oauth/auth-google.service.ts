import { inject, Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../../auth/auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private oAuthService = inject(OAuthService);
  private readonly _router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfig();
  }

  initConfig() {
    try {
      const config = {
        ...authConfig,
        redirectUri: `http://localhost:4200/home`
      };
      this.oAuthService.configure(config);
      this.oAuthService.setupAutomaticSilentRefresh();
      this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        if (this.oAuthService.hasValidIdToken()) {
          console.log(this.oAuthService.hasValidAccessToken());
          this.profile.set(this.oAuthService.getIdentityClaims());
        }
      }); 
    } catch (e) {
      console.error(e);
    }
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.profile.set(null);
  }

  getProfile() {
    return this.profile();
  }

}
