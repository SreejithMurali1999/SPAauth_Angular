import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm! : FormGroup

  constructor(private formbuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signinForm = this.formbuilder.group( {
      name:[''],
      password:['']
    })
  }
  signin() {
    this.http.get<any>( 'http://localhost:3000/user').subscribe(res=>
    {
      const user = res.find((a:any)=> {
        return a.name===this.signinForm.value.name && a.password === this.signinForm.value.password
        
        })
        if(user) {
          alert("user exists");
          this.signinForm.reset();
        }
        else {
          alert("doesn't exist")
          this.signinForm.reset();
        }
    });
  }

}
