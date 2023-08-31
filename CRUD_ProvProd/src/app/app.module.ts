import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { EstadocivilComponent } from './Pages/estadocivil/estadocivil.component';
import { ProveedoresComponent } from './Pages/proveedores/proveedores.component';
import { NuevopacienteComponent } from './Pages/productos/nuevoproducto/nuevoproducto.component';
import { EditarpacienteComponent } from './Pages/productos/editarproducto/editarproducto.component';
import { PagesComponent } from './Pages/pages.component';
import { NuevoproveedorComponent } from './Pages/proveedores/nuevoproveedor/nuevoproveedor.component';
import { EditarproveedorComponent } from './Pages/proveedores/editarproveedor/editarproveedor.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(), ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductosComponent,
    EstadocivilComponent,
    ProveedoresComponent,
    NuevopacienteComponent,
    EditarpacienteComponent,
    PagesComponent,
    NuevoproveedorComponent,
    EditarproveedorComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
