import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCYU7czzckffJNAmuErqrEo348FZaFfAq4',
  authDomain: 'practica1angular2login.firebaseapp.com',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '898789757494'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
