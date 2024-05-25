import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) 
  { 

  }

  AuthenticateUser(user:User):Observable<any>
  {
    return this.http.post(environment.apiBaseUrl,user)
  }
}
