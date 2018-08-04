import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { RouteAdminComponent } from './route-admin.component';


const routes: Routes = [
  {
    path: 'route-admin',
    component: RouteAdminComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class RouteAdminRoutingModule {
}
