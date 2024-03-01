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
  logowanie(){
    let loginValue1 = this.loginForm.get("email")!.value
   let passwordValue1 = this.loginForm.get("password")!.value
  let loginValue = "Ukasz"
  let passwordValue = "haslo"
  let blad = ""
  if(loginValue1 == loginValue && passwordValue1 == passwordValue ){
    this.router.navigate(['/sklep'])
  }
  else{
    blad = "Zly email lub haslo"
  }
  }
  loginForm = new FormGroup({
    email: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required])
  })
}
