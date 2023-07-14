import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

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

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
