import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'rdw4tCARJ6r6avcLozhYaTn2e7Rghl23',
    domain: 'haidermalik.auth0.com',
    responseType: 'token id_token',
    audience: 'https://haidermalik.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}
