import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validLogin:boolean = true;

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.getUsuarios().subscribe();
  }

  enviarForm(form) {
    this.validLogin = this._loginService.validUsuario(form.value.nombre, form.value.pass);
    if (this.validLogin) {
      this.router.navigate(['/productos']);
    }else{
      form.reset();
    }
    setTimeout(()=>{ this.validLogin=true; }, 3000);
  }


}
