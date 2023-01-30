import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { profile, user } from 'src/app/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Api = 'https://damp-spire-59848.herokuapp.com/api'
  ApiUser = `${this.Api}/users`
  ApiAuth = `${this.Api}/auth`
  private Token = localStorage.getItem('Token') || null
  private profile:profile | null = null

  $profile = new BehaviorSubject(this.profile)

  constructor(
    private http:HttpClient
  ) { }

  createUser(user:user) {
    return this.http.post<user>(this.ApiUser,user)
  }

  login(user:{ email:string,password:string }) {
    return this.http.post<{access_token:string}>(`${this.ApiAuth}/login`,user)
  }

  getProfile() {
    if(this.Token !== null) {
      return this.http.get<profile>(`${this.ApiAuth}/profile`,{
        headers: {
          "Authorization": `Bearer ${this.Token}`
        }
      })
    }
    return null
  }
  setProfile(profile:profile) {
    this.profile = profile
    this.$profile.next(this.profile)
  }

  saveToken(Token:string) {
    localStorage.setItem('Token',Token)
    this.Token = localStorage.getItem('Token')
  }

  LogOut() {
    this.Token = null
    localStorage.removeItem('Token')
    this.profile = null
    this.$profile.next(this.profile)
  }
}
