
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

### Firebase Konfigürasyonu

- Bize verdiği firebase konfigürasyonunu oluşturduğumuz Angular projesine login/logout işlemlerinde kullanmak için eklememiz gerekiyor. 
- Standart haline gelen ``` src/environments/environment.ts ``` dosya yoluna bu konfigürasyonu ekleyebilirsiniz.

    ```javascript
    export const environment = {
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

    ```javascript
    import { AngularFireModule } from '@angular/fire/compat';
    import { AngularFireAuthModule } from '@angular/fire/compat/auth';
    import { firebaseConfig } from '../environments/environment';
    ```
    ```javascript
    imports: [
        ///
        AngularFireModule.initializeApp(firebaseConfig.firebase),
        AngularFireAuthModule,
    ],
    ```






  
