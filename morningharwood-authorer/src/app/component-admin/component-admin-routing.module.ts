import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AdminRoute } from '../utils/enums';
import { ComponentAdminListComponent } from './component-admin-list/component-admin-list.component';
import { ComponentAdminDetailComponent } from './component-admin-detail/component-admin-detail.component';


const routes: Routes = [
  {
    path: AdminRoute.COMPONENT,
    component: ComponentAdminListComponent,
  },
  {
    path: `${AdminRoute.COMPONENT}/:id`,
    component: ComponentAdminDetailComponent,
    // resolve: {
    //   details: RouteResolve,
    // },
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ComponentAdminRoutingModule {
}
