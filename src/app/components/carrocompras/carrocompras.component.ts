import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionmenuService } from '../../services/notificacionmenu.service';
import { Producto } from "../../interfaces/producto.interface";
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-carrocompras',
  templateUrl: './carrocompras.component.html',
  styleUrls: ['./carrocompras.component.css']
})
export class CarrocomprasComponent implements OnInit {
  productos: Producto[] = [];
  totalPrecioProductos: number = 0;
  actualizado: boolean = false;
  constructor(private _notificacionmenuService: NotificacionmenuService, private _productosService: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productos = this._notificacionmenuService.getCarElements();
    this.totalPrecioProductos = this._notificacionmenuService.getPriceTotalElements();
  }

  pagar() {
    let lengthProductos: number = this.productos.length;
    this._productosService.getProductos().subscribe(productos => {
      for (let key in productos) {
        for (let producto of this.productos) {
          if (key === producto.key$) {
            productos[key].uniDisp -= producto.cantidad;
            this._productosService.actualizarProducto(productos[key], key).finally(() => {
              lengthProductos--;
              if (lengthProductos == 0) {
                this.productos = [];
                this._notificacionmenuService.cleanCarElements();
                this.router.navigate(['/productos']);
              }
            }).subscribe(productoAct => {
            });
          }
        }
      }
    });

  }
}
