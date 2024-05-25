import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Route } from '@angular/router';
import { User } from '../../models/login';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User;

  constructor(private service:LoginService)
  {
    this.user=new User();
  }

  onSubmit(request:User)
  {    
    request.password=this.encryptPassword(request.password);
    this.service.AuthenticateUser(request).subscribe(data=>{
      console.log(data)
    });
  }

  encryptPassword(password: string): string {
    return CryptoJS.AES.encrypt(password, environment.secretKey).toString();
  }
}
