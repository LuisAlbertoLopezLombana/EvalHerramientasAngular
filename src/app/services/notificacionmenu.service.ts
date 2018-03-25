import { Injectable } from '@angular/core';
import { Producto } from "../interfaces/producto.interface";

@Injectable()
export class NotificacionmenuService {
  productos: Producto[] = [];
  precioTotal: number = 0;

  constructor() { }

  addProductoCar(producto: Producto, cantidad:number, key$:string){
    let productoCopy = Object.assign({}, producto);
    productoCopy.precio = +productoCopy.precio * +cantidad;
    productoCopy.key$ = key$;
    this.precioTotal += +productoCopy.precio;
    productoCopy.cantidad = +cantidad;
    this.productos.push(productoCopy);
  }

  getCarElements(){
    return this.productos;
  }

  cleanCarElements(){
      this.productos= [];
  }

  getPriceTotalElements(){
      return this.precioTotal;
  }
}
