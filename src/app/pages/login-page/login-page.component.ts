import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private router: Router){

  }
  essa(){
    document.getElementById("test")!.innerHTML = " 123"
  }
  loginForm = new FormGroup({
    email: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required])
  })
}
