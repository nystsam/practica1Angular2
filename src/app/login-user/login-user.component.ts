import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
    
  user = {};

  constructor( private af: AngularFire) {
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

  googleLogin() : void {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  facebookLogin() : void
  {
      this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }
  }
/*  
  logout() {
    this.af.auth.logout();
  }
*/
}
