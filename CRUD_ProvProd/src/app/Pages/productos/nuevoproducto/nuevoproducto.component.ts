import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { ApiService } from '../../../Services/api.service';

@Component({
    selector: "app-nuevoproducto",
    templateUrl: "./nuevoproducto.component.html",
    styleUrls: ["./nuevoproducto.component.scss"]
})

export class NuevopacienteComponent implements OnInit {

    proveedores: any = [];
    nombre: string = '';
    precio: string = '';
    fechafab: string = '';
    cantidad: string = '';
    idProveedor: string = '';

    constructor(
        private servicio: ApiService,
        private toastr: ToastrService,
        private router: Router,


    ) { }

    ngOnInit(): void {
        this.listarProveedores();
    }

    camposLlenos(): boolean {
        return this.idProveedor !== '' &&
               this.nombre !== '' &&
               this.precio !== '' &&
               this.fechafab !== '' &&
               this.cantidad !== '';
      }


    onProveedorChange(event: any) {
        this.idProveedor = event.target.value;
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

    addProducto() {
        let datos = {
            accion: 'addProducto',
            nombre: this.nombre,
            precio: this.precio,
            fechafab: this.fechafab,
            cantidad: this.cantidad,
            proveedor: this.idProveedor,
        }

        this.servicio.postData(datos).subscribe((res: any) => {
            if (res.estado == true) {
                this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span>Producto agregado con éxito', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: 'alert alert-success alert-with-icon',
                    positionClass: 'toast-top-right'
                });
                this.router.navigateByUrl('/productos');
            } else {
                this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span>Error al agregar el producto', '', {
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
