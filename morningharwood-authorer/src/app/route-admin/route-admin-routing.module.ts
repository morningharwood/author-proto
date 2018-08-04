import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { RouteAdminListComponent } from './route-admin-list/route-admin-list.component';
import { RouteResolve } from './route-resolve';
import { RouteAdminDetailComponent } from './route-admin-detail/route-admin-detail.component';


const routes: Routes = [
  {
    path: 'route-admin/:id',
    component: RouteAdminDetailComponent,
    resolve: {
      details: RouteResolve,
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
