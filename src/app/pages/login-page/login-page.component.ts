import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestService } from '../../services/rest.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private publicRest: RestService,
    ){

  }
  ngOnInit(): void {
    this.submit()
  }
  blad = false
  logowanie(){
    let loginValue1 = this.loginForm.get("email")!.value
   let passwordValue1 = this.loginForm.get("password")!.value
  let loginValue = "Ukasz"
  let passwordValue = "haslo"
  if(loginValue1 == loginValue && passwordValue1 == passwordValue ){
    this.router.navigate(['/sklep'])
    this.blad = false
  }
  else{
    this.blad = true
    document.getElementById("error")!.style.visibility = "visible";
  }
  console.log(this.blad)
  }
  loginForm = new FormGroup({
    email: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required])
  })
  subLogin?: Subscription
  loading = false
  customErrorLogin?: string
  checkValidForm = false
submit(){
  let loginValue = this.loginForm.get('email')!.value
  let passwordValue = this.loginForm.get('password')!.value
  this.subLogin = this.publicRest.getProdukt().subscribe({
    next: (response) => {
      if(response.body){
         console.log(response.body)
      }
      else{
        this.customErrorLogin! = "Brak obiekru odpowiedzi"
      }
    },
    error: (errorResponse) => {
      this.loading = false
      this.customErrorLogin = errorResponse.error
    },
    complete: () => {
      this.loading = false
    },
  })
}
}
