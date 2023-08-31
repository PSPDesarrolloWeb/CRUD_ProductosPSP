import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.component.html',
  styleUrls: ['./editarproveedor.component.scss']
})
export class EditarproveedorComponent implements OnInit {

  datosProveedor: any = [];
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';
  email: string = '';
  pais: string = '';
  idFromUrl: string = '';
  constructor(
    private servicio: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idFromUrl = params['id'];
      this.cargarDatosPaciente();
    });
  }





  cargarDatosPaciente() {
    let datosProveedor = {
      accion: 'cargarDatosProveedor',
      idProveedor: this.idFromUrl,
    };
    this.servicio.postData(datosProveedor).subscribe(
      async (res: any) => {
        if (res.estado == true) {
          this.datosProveedor = res.datosProveedor;
        } else {
          console.log('Error al consultar datos del proveedor');
        }
      },
      (error) => {
        console.log('Error en la conexión');
      }
    );
  }
  

  updateProveedor(datos: any) {

    let data = {
      accion: 'updateProveedor',
      idProveedor: this.idFromUrl,
      nombre: datos.nombre,
      direccion: datos.direccion,
      telefono: datos.telefono,
      email: datos.email,
      pais: datos.pais,
    };

    

    this.servicio.postData(data).subscribe((res: any) => {
      if (res.estado === true) {
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span>Datos actualizados correctamente', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-top-right'
        });
        this.router.navigateByUrl('/proveedores');
      } else {
        this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span>Error al actualizar datos', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-top-right'
        });
      }
    }, (error) => {
      alert('Error en la conexión');
    });
  }

}
