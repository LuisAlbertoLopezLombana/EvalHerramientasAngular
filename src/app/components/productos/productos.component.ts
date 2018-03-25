import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from "../../interfaces/producto.interface";
import { NotificacionmenuService } from '../../services/notificacionmenu.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  msgerror:boolean =false;

  constructor(private _productosService: ProductosService, private router: Router, private _notificacionmenuService: NotificacionmenuService) { }

  ngOnInit() {
    this.buscarProductos();
  }

  verProducto(idx: number) {
    this.router.navigate(['/producto', idx]);
  }

  buscarProductos() {
    this._productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  buscarProducto(termino: string) {
    this.productos = this._productosService.buscarProductos(termino);
  }

  addProductoCar(producto: Producto, cantidad: number, key$: string) {
    if (cantidad >= 1) {
      this.msgerror=false;
      this._notificacionmenuService.addProductoCar(producto, cantidad, key$);
    }else{
      this.msgerror=true;
      setTimeout(()=>{
        this.msgerror=false;
      },3000)
    }
  }



}
