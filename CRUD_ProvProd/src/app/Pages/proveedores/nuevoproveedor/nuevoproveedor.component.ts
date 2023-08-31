import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-nuevoproveedor',
  templateUrl: './nuevoproveedor.component.html',
  styleUrls: ['./nuevoproveedor.component.scss']
})
export class NuevoproveedorComponent implements OnInit {

  nombre: string = '';
  direccion: string = '';
  telefono: string = '';
  email: string = '';
  pais: string = '';

  constructor(
      private servicio: ApiService,
      private toastr: ToastrService,
      private router: Router,


  ) { }

  ngOnInit(): void {}


  camposLlenos(): boolean {
    return this.nombre !== '' &&
           this.direccion !== '' &&
           this.telefono !== '' &&
           this.email !== '' &&
           this.pais !== '';
  }


  addProveedor() {
      let datos = {
          accion: 'addProveedor',
          nombre: this.nombre,
          direccion: this.direccion,
          telefono: this.telefono,
          email: this.email,
          pais: this.pais,
      }
  
      this.servicio.postData(datos).subscribe((res: any) => {
          if (res.estado == true) {
              this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span>Proveedor agregado con éxito', '', {
                  timeOut: 8000,
                  closeButton: true,
                  enableHtml: true,
                  toastClass: 'alert alert-success alert-with-icon',
                  positionClass: 'toast-top-right'
              });
              this.router.navigateByUrl('/proveedores');
          } else {
              this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span>Error al agregar el Proveedor', '', {
                  timeOut: 8000,
                  closeButton: true,
                  enableHtml: true,
                  toastClass: 'alert alert-danger alert-with-icon',
                  positionClass: 'toast-top-right'
              });
              console.log(res); 
          }
      });
  }
  

}