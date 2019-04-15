import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/dictionary']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } if (errorCode === 'auth/invalid-email') {
        alert('Wrong email address.');
      } if (errorCode === 'auth/user-disabled') {
        alert('The email address has been disabled.');
      } if (errorCode === 'auth/user-not-found') {
        alert('User not found.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log('Signed Out');
    }, (error) => {
      console.error('Sign Out Error', error);
    });
  }

}
