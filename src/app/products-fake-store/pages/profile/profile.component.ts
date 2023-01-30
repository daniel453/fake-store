import { Component,OnInit } from '@angular/core';
import { profile } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile:profile | null = null
  constructor(
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.authService.$profile.subscribe(profile => {
      this.profile = profile
    })
  }
}
