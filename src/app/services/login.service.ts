import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class LoginService {

  url: string = "https://productosappnu.firebaseio.com/usuarios.json";
  response: any;

  constructor(private http: Http) { }

  getUsuarios() {
    return this.http.get(this.url).map(res => {
      this.response = res.json();;
      return this.response;
    });
  }

  convertObjToArrUsuarios() {
    let usuarios: any[] = [];
    for (let key in this.response) {
      usuarios.push(this.response[key]);
    }
    return usuarios;
  }

  validUsuario(email: string, pass: string) {
    let permitido:boolean = false;
    for (let usuario of this.convertObjToArrUsuarios()) {
      permitido=usuario != null && usuario.email == email && usuario.pass == pass;
      if(permitido){
        break;
      }
    }
    return permitido;
  }


}
