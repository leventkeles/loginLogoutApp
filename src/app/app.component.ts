import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'loginLogoutApp';
  constructor(private authService: AuthService) {}
  ngOnInit() {}
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
