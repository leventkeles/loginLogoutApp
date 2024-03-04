import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  ngOnInit() {}
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  login(email: string, password: string) {
    this.authService.login(email, password);
  }
}
