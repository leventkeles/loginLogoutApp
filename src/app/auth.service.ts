import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  errorMessage = '';
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.errorMessage = '';
        console.log('Giriş başarılı!');
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.log('Giriş başarısız:', error);
      });
  }

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        console.log('çıkış yapıldı');
      })
      .catch((error) => {
        console.log('çıkış yapılamadı:' + error);
      });
  }
}
