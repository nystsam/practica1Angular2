import { Component } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login:';
  user = {};

  constructor( public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        console.log(user.auth.displayName);
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }
  
  logout() {
    this.af.auth.logout();
  }

}
