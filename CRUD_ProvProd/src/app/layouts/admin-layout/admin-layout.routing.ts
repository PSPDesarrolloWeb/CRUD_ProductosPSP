import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ProductosComponent } from '../../Pages/productos/productos.component';
import { NuevopacienteComponent } from '../../Pages/productos/nuevoproducto/nuevoproducto.component';
import { EditarpacienteComponent } from '../../Pages/productos/editarproducto/editarproducto.component';
import { ProveedoresComponent } from '../../Pages/proveedores/proveedores.component';
import { NuevoproveedorComponent } from '../../Pages/proveedores/nuevoproveedor/nuevoproveedor.component';
import { EditarproveedorComponent } from '../../Pages/proveedores/editarproveedor/editarproveedor.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'proveedores',    component: ProveedoresComponent },
    { path: 'nuevoproveedor',  component: NuevoproveedorComponent },
    { path: 'editarproveedor/:id',  component: EditarproveedorComponent },
    { path: 'productos',      component: ProductosComponent },
    { path: 'nuevoproducto',  component: NuevopacienteComponent },
    { path: 'editarproducto/:id',  component: EditarpacienteComponent }
  
];
