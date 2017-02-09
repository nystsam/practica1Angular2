import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { HomeComponent } from './home/home.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCYU7czzckffJNAmuErqrEo348FZaFfAq4',
  authDomain: 'practica1angular2login.firebaseapp.com',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '898789757494'
};

export const myRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
