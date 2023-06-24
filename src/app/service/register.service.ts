import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public exp:any;
  constructor(private htp : HttpClient) { }

  getData()
  {
    return this.htp.get(' http://localhost:3000/Register');
  }
  postData(dt:any)
  {
    return this.htp.post(' http://localhost:3000/Register',dt)
  }
  
  


}
