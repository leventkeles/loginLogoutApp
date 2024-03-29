import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
    //mouse hover glowing çıkış yaptıktan sonra çalışmıyor bu nedenle reload ediyorum
    location.reload();
  }
  
}
