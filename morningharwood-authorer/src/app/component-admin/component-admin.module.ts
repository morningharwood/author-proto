import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentAdminRoutingModule } from './component-admin-routing.module';
import { ComponentAdminComponent } from './component-admin.component';
import { Routes } from '@angular/router';
import { RouteAdminComponent } from '../route-admin/route-admin.component';

const routes: Routes = [
  {
    path: 'route-admin',
    component: RouteAdminComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ComponentAdminRoutingModule
  ],
  declarations: [ComponentAdminComponent]
})
export class ComponentAdminModule { }
