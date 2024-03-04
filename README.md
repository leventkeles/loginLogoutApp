
# LoginLogoutApp

Bu proje Angular 17 (version 17.2.2) ile Giriş ve Çıkış işlemini basit bir düzeyde sunmakta ve UI kısmında mouse tracking/mouse hover glowing efektini sunmaktadır.




## Hızlı Başlangıç / Ön İzleme

Projeyi hızlı bir şekilde incelemek için aşağıdakileri uygulayın.

```bash 
  npm install
  ng serve
```
    
# Çalışma Mekanizması


 ## Yon Haritası

- Firebase projesi oluşturma ve app ekleme
İlk olarak bir Firebase projesi oluşturduktan sonra projemize girerek "add app" kısmında "web" platformunu seçiyoruz. 

Authentication>Sign-in Method>Add new provider>Email/Password yolunu izleyerek Email ve Parola girişini aktif hale getiriyoruz.

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



  
