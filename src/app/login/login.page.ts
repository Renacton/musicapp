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
      { type: "required", message: "*Este campo es obligatorio" },
      { type: "pattern", message: "*Debe poner un email valido" },
      { type: "maxlength", message: "*se excedio el limite de caracteres" }
    ],
    password: [
      { type: "required", message: "*Este campo es obligatorio" },
      { type: "minlength", message: "*Tu contraseña es muy corta" },
      { type: "maxlength", message: "*se excedio el limite de caracteres" }
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
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$"),
              Validators.maxLength(320)
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(32)
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
