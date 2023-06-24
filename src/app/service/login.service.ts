import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private htp: HttpClient) { }


  checkCredentials(email: string, password: string) {
    // Make a POST request to the backend API endpoint
    return this.htp.post('http://localhost:3000/Login', { email, password });
  }
}
