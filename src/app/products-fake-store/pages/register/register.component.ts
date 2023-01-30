import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

interface userCreated {
  isCreated: boolean,
  errors: string[]
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:user = {
    email: '',
    name: '',
    password: '',
    role: ''
  }
  userCreated:userCreated = {
    isCreated: false,
    errors: []
  }

  constructor(
    private authService:AuthService
  ) {}

  createUser() {
    this.authService.createUser(this.user)
      .subscribe(() => {
        this.userCreated.isCreated = true
      },
      (error:HttpErrorResponse) => {
        let newErrors:userCreated = { isCreated:false,errors: []}
        if(error.status === 400) {
          newErrors.errors = error.error.message
          this.userCreated = newErrors
        } else {
          newErrors.errors = ['Ups... ocurrio un problema']
          this.userCreated = newErrors
        }
      })
  }

  closeModalError() {
    this.userCreated.errors = []
  }
}
