import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProductosService } from './services/productos.service';
import { LoginService } from './services/login.service';
import { NotificacionmenuService } from './services/notificacionmenu.service';

//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginComponent } from './components/login/login.component';
import { KeysPipe } from './pipes/keys.pipe';
import { CarrocomprasComponent } from './components/carrocompras/carrocompras.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    ProductoComponent,
    LoginComponent,
    KeysPipe,
    CarrocomprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService,
    LoginService,
    NotificacionmenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
