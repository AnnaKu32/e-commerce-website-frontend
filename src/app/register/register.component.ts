import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = "";
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";

  constructor(private http: HttpClient){}

  addUser(){
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password,
      "firstName" : this.firstName,
      "lastName" : this.lastName,
    };
    this.http.post("http://localhost:8080/auth/register", bodyData, {responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("User Registered Successfully");
    });
  }
}
