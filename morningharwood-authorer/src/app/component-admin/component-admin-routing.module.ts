import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { ComponentAdminComponent } from './component-admin.component';


const routes: Routes = [
  {
    path: 'component-admin',
    component: ComponentAdminComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ComponentAdminRoutingModule {
}
