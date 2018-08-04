import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionAdminRoutingModule } from './section-admin-routing.module';
import { SectionAdminComponent } from './section-admin.component';



@NgModule({
  imports: [
    CommonModule,
    SectionAdminRoutingModule
  ],
  declarations: [SectionAdminComponent]
})
export class SectionAdminModule { }
