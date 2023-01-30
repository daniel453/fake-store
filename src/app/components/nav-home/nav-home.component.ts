import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html'
})
export class NavHomeComponent implements OnInit{
  modalMobileOpen:boolean = false
  email:string | null = null

  constructor(
    private authService:AuthService,
  ) {}

  ngOnInit():void {
    this.authService.getProfile()?.subscribe(profile => {
      this.email = profile.email
      this.authService.setProfile(profile)
    },error => console.log(error))

    this.authService.$profile.subscribe(profile => {
      if(profile?.email) {
        this.email = profile.email
      } else if(profile == null) {
        this.email = null
      }
    })
  }

  toggleModalMobile() {
    this.modalMobileOpen = !this.modalMobileOpen
  }

  logOut() {
    this.authService.LogOut()
  }
}
