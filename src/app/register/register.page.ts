import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

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
    ],
    name: [
      { type: "required", message: "*Este campo es obligatorio" },
      { type: "minlength", message: "*debes usar minimo 4 carcteres" },
      { type: "pattern", message: "*tu nombre solo puede tener letras y numeros" },
      { type: "maxlength", message: "*se excedio el limite de caracteres" }
    ],
    sur_name: [
      { type: "required", message: "*Este campo es obligatorio" },
      { type: "minlength", message: "*debes usar minimo 4 caracteres" },
      { type: "pattern", message: "*tu apellido solo puede tener letras y numeros" },
      { type: "maxlength", message: "*se excedio el limite de caracteres" }
    ]
  }

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group(
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
              Validators.maxLength(32),
              Validators.minLength(6)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.pattern('[A-Za-z]{1,32}'),
              Validators.required,
              Validators.maxLength(32),
              Validators.minLength(6)
            ]
          )
        ),
        sur_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.pattern('[A-Za-z]{1,32}'),
              Validators.required,
              Validators.maxLength(32),
              Validators.minLength(6)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateForward("/login")
  }

  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).subscribe(res => {
      console.log(res)
      this.navCtrl.navigateBack("/login");
    })
  }

}
