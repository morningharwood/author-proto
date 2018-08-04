import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { RouteAdminComponent } from './route-admin.component';
import { RouteAdminListComponent } from './route-admin-list/route-admin-list.component';
import { RouteResolve } from './route-resolve';


const routes: Routes = [
  {
    path: 'route-admin/:id',
    component: RouteAdminComponent,
    resolve: {
      routeDetail: RouteResolve,
    },
  },
  {
    path: 'route-admin',
    component: RouteAdminListComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    RouteResolve,
  ],
})
export class RouteAdminRoutingModule {
}
