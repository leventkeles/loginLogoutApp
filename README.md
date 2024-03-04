
# LoginLogoutApp

Bu proje Angular 17 (version 17.2.2) ile Giriş ve Çıkış işlemini basit bir düzeyde sunmakta ve UI kısmında mouse tracking/mouse hover glowing efektini sunmaktadır.




## Hızlı Başlangıç / Ön İzleme

Projeyi hızlı bir şekilde incelemek için aşağıdakileri uygulayın.

```bash 
  npm install
  ng serve
```
    
# Çalışma Mekanizması


 ## Firebase İşlemleri

- Firebase projesi oluşturma ve app ekleme

    İlk olarak bir Firebase projesi oluşturduktan sonra projemize girerek "add app" kısmında "web" platformunu seçiyoruz. ```Authentication>Sign-in Method>Add new provider>Email/Password``` yolunu izleyerek Email ve Parola girişini aktif hale getiriyoruz.

## Firebase Konfigürasyonu

- Bize verdiği firebase konfigürasyonunu oluşturduğumuz Angular projesine login/logout işlemlerinde kullanmak için eklememiz gerekiyor. 
- Standart haline gelen ``` src/environments/environment.ts ``` dosya yoluna bu konfigürasyonu ekleyebilirsiniz.

    ```typescript
    export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
    };
    ```

- Aşağıdaki komut ile projemize AngularFire kütüphanesini projemize indiriyoruz
    ```bash 
    npm i @angular/fire
    ```

- app.module.ts dosyasına Firebase modüllerini ekliyoruz çünkü bu dosya uygulamanın ana modül dosyasıdır ve uygulamanın ana komponentini (app.component)/komponentlerini ve servislerini içerir. Firebase modüllerini bu dosyaya eklemek, uygulamanın tüm komponentlerinde bu modüllere erişim sağlar.

    ```typescript
    import { AngularFireModule } from '@angular/fire/compat';
    import { AngularFireAuthModule } from '@angular/fire/compat/auth';
    import { firebaseConfig } from '../environments/environment';
    ```
    ```typescript
    imports: [
        ///
        AngularFireModule.initializeApp(firebaseConfig.firebase),
        AngularFireAuthModule,
    ],
    ```

## Auth Servisi oluşturma

Aşağıdaki komut ile bir servis dosyası oluşturuyoruz.

```bash
ng generate service auth
```

Servisimize login ve logout işlemlerini tanımlıyoruz.

```typescript

  //kullanıcı henüz giriş yapmadıysa false
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth) {
    //kullanıcı giriş yaptıysa true, yapamadıysa false
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
        //console.log("giriş başarılı");
        ///
      })
      .catch((error) => {
        //console.log("giriş başarısız");
        ///
      });
  }

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        //console.log("çıkış başarılı");
        ///
      })
      .catch((error) => {
        //console.log("çıkış başarılı");
        ///
      });
  }
  ```

## Auth Servisini Komponentlerde Kullanma

### Giriş Yap Komponenti

Login ve Home isminde iki komponent oluştururuyoruz. Komponent class'ı içerisine kodu yapıştırıyoruz.

```typescript
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  login(email: string, password: string) {
    this.authService.login(email, password);
  }
```  
HTML kısmında ise aşağıdaki kodu yapıştırıyoruz.

```html
<form (ngSubmit)="login(email, password)">
  <div>
    <div>
      <input
        type="email"
        name="email"
        id="email"
        [(ngModel)]="email"
      />
    </div>
    <div>
      <input
        type="password"
        name="password"
        [(ngModel)]="password"
        id="password"
      />
    </div>
  </div>
  <button type="submit">Giriş Yap</button>
</form>
```

ngModel ile ilk olarak inputlardaki bilgiyi alıp ngSubmit ile submit butonuna tıklandığında login(email,password) parametreli fonksiyonu çağırıyoruz.

### Home Komponenti

Aşağıdaki kodu komponentimize ekleyip bir buton vasıtasıyla çağırıyoruz.

```typescript
constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
```

### App Komponenti

App komponentimize aşağıdaki kodu ekleyerek bir boolean değeriyle kullanıcının giriş çıkış bilgisini öğreniyoruz.

```typescript
constructor(private authService: AuthService) {}
  ngOnInit() {}
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
````
HTML kısmını ise aşağıdaki gibi yapıyoruz. *NGIf yardımı ile HTML içerisinde if/else fonskiyonelitesini kullanma imkanına sahibiz. Kullanıcının giriş çıkış işlemlerinden aldığımız login/false değeri bilgisi ile komponentleri ekrana sunuyoruz.

```HTML
<div *ngIf="isLoggedIn">
  <app-home></app-home>
</div>
<div *ngIf="!isLoggedIn">
  <app-login></app-login>
</div>
```












  
