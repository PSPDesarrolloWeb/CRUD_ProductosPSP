import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.scss']
})
export class EditarpacienteComponent implements OnInit {

  datosProducto: any = [];
  proveedores: any = [];
  nombre: string = '';
  precio: string = '';
  fechafab: string = '';
  cantidad: string = '';
  idProveedor: string = '';
  idFromUrl: string = '';
  proveedorSeleccionado: any = null;

  constructor(
    private servicio: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.listarProveedores();
    this.route.params.subscribe(params => {
      this.idFromUrl = params['id'];
      this.cargarDatosProducto();

    });
  }

  onProveedorChange(proveedorId: any) {
    this.idProveedor = proveedorId;
    console.log(this.idProveedor);
  }

  listarProveedores() {
    let proveedores = {
      accion: 'listarProveedores',
    };
    this.servicio.postData(proveedores).subscribe(
      async (res: any) => {
        if (res.estado == true) {
          this.proveedores = res.proveedores;
        } else {
        }
      },
      (error) => {
        console.log('Error en la conexión');
      }
    );
  }


  cargarDatosProducto() {
    let datosProducto = {
      accion: 'cargarDatosProducto',
      idProducto: this.idFromUrl,
    };
    this.servicio.postData(datosProducto).subscribe(
      async (res: any) => {
        if (res.estado == true) {
          this.datosProducto = res.datosProducto;
          this.idProveedor = this.datosProducto[0].proveedor;
        } else {
          console.log('Error al consultar datos del producto');
        }
      },
      (error) => {
        console.log('Error en la conexión');
      }
    );
  }


  updateProducto(datos: any) {

    let data = {
      accion: 'updateProducto',
      idProducto: this.idFromUrl,
      nombre: datos.nombre,
      precio: datos.precio,
      fechafab: datos.fechafab,
      cantidad: datos.cantidad,
      idProveedor: this.idProveedor
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
        this.router.navigateByUrl('/productos');
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
