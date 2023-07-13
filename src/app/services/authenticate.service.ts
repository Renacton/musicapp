import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials:any){
    return new Promise((accept, reject) => {
      if(
        credentials.email == "renatoescorciac@gmail.com" &&
        credentials.password == "Renacton19"
      )
      {
        accept("login exitoso")
      } else {
        reject("El email o la contraseña no son validos")
      }
    })
  }
}
