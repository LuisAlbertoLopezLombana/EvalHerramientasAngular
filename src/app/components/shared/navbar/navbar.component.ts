import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionmenuService } from '../../../services/notificacionmenu.service';
import { Producto } from "../../../interfaces/producto.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private _notificacionmenuService: NotificacionmenuService, private router: Router) { }

  ngOnInit() {
    this.productos = this._notificacionmenuService.getCarElements();
  }

  verCarroCompras() {
    this.router.navigate(['/carrocompras']);
  }


}
