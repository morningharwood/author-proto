import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentAdminRoutingModule } from './component-admin-routing.module';
import { ComponentAdminComponent } from './component-admin.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentAdminRoutingModule,
  ],
  declarations: [ ComponentAdminComponent ],
})
export class ComponentAdminModule {
}
