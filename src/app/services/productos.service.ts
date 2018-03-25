import { Injectable } from '@angular/core';
import { Producto } from "../interfaces/producto.interface";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  url:string = "https://productosappnu.firebaseio.com/productos.json";
  urlProducto:string = "https://productosappnu.firebaseio.com/productos";
  response:any;

  constructor(private http:Http) {}

  getProductos(){
    return this.http.get(this.url).map(res=>{
      this.response =res.json();
      return this.response;
    });
  }

  getProducto(idx:string){
    return this.convertObjToArrProductos()[idx];
  }

  convertObjToArrProductos(){
    let productos:Producto[] = [];
    for(let key in this.response){
      productos.push(this.response[key]);
    }
    return productos;
  }

  buscarProductos(termino:string){
    let productosPorTermino:Producto[] = [];
    termino = termino.toLowerCase();
    for(let producto of this.convertObjToArrProductos()){
       let nombreProducto = producto.nombreProducto.toLowerCase();
       if(nombreProducto.indexOf(termino) >= 0){
         productosPorTermino.push(producto);
       }
    }
    return productosPorTermino;
  }

  insert(producto:Producto){
    let body = JSON.stringify(producto);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post(this.url, body, { headers:headers }).map(res=>{
      return res.json();
    });

  }

  actualizarProducto(producto:Producto, key$:string){
    let body = JSON.stringify(producto);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${this.urlProducto}/${ key$ }.json`;
    return this.http.put(url, body, { headers:headers }).map(res=>{
      return res.json();
    });

  }
}
