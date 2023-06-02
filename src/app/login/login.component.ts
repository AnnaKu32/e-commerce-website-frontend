import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient){}

  loginUser(){
    let bodyData = {
      "username" : this.username,
      "password" : this.password,
    };

    this.http.post("http://localhost:8080/auth/login", bodyData, { responseType: 'text' }).subscribe(
  (resultData: any) => {
    const response = JSON.parse(resultData);
    if (response.success) {
      localStorage.setItem('jwtToken', response.jwt);
      alert("User login successful");
      this.router.navigateByUrl('/me');
    } else {
      alert("User login unsuccessful");
    }
  }
);

  }
}
