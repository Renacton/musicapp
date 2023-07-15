import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "Este campo es obligatorio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ],
    password: [
      { type: "required", message: "Este campo es obligatorio" },
      { type: "minLength", message: "tu contraseña debe tener por lo menos 6 digitos" }
    ]
  }

  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
    ) {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        )
      }
    )
  }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage="";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("menu/home");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
    })
  }
  
  goToRegister(){
    this.navCtrl.navigateForward("/register")
  }

}
