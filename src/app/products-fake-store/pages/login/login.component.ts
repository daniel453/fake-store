import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:{ email:string,password:string } = { email: '', password: '' }
  errorLogin:string[] = []

  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

  login() {
    this.authService.login(this.user)
      .subscribe(token => {
        this.authService.saveToken(token.access_token)
        this.router.navigate(['/home'])
      },() => {
        this.errorLogin = ['El email o la contraseña son incorrectas']
      })
  }

  closeModalError() {
    this.errorLogin = []
  }
}
