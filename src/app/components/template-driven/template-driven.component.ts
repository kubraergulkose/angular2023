
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  loginmodel : loginModel;
  loginmodelclass : loginModelC;

  constructor() {
    this.loginmodel = {username: '', password:'', rememberMe: false}
    this.loginmodelclass = new loginModelC;
  }

  Save(input:string) {
    console.log(input)
  }

  login(form:NgForm) {
    console.log(form.value)
    console.log("loginModel değerlerimle form valuelarını alıyorum.")
    console.log(this.loginmodel)
    console.log(this.loginmodelclass)

  }

}

interface loginModel {
  username:string,
  password: string,
  rememberMe: boolean
}

//class ile bir login model tanımlama 

class loginModelC {
  username:string | undefined;
  password: string | undefined;
  rememberMe: boolean | undefined
}
