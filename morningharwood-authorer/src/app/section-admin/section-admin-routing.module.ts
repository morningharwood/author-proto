import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { SectionAdminComponent } from './section-admin.component';


const routes: Routes = [
  {
    path: 'section-admin',
    component: SectionAdminComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class SectionAdminRoutingModule {
}
