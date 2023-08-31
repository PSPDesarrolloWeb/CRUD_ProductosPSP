import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { ToastrService } from 'ngx-toastr';

import swal from 'sweetalert2';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any = [];


  constructor(
      private servicio: ApiService,
      private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
      this.listarProveedores();
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

  deleteProveedor(id: number) {
      swal.fire({
          title: 'Eliminar',
          text: "¿Estás seguro de eliminar este proveedor?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, eliminarlo'
      }).then((result) => {
          if (result.isConfirmed) {
              let datos = {
                  accion: 'deleteProveedor',
                  idProveedor: id,
              };

              this.servicio.postData(datos).subscribe(
                  async (res: any) => {
                      if (res.estado == true) {
                          this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span>Proveedor eliminado correctamente', '', {
                              timeOut: 8000,
                              closeButton: true,
                              enableHtml: true,
                              toastClass: 'alert alert-success alert-with-icon',
                              positionClass: 'toast-top-right'
                          });
                          this.listarProveedores();
                      } else {
                          console.log('Error al eliminar el Proveedor');
                      }
                  },
                  (error) => {
                      console.log('Error en la conexión');
                  }
              );
          }
      });
  }

}
