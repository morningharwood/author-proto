import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteAdminRoutingModule } from './route-admin-routing.module';
import {
  RepeatTypeComponent,
  RouteAdminComponent,
} from './route-admin.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouteAdminRoutingModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: RepeatTypeComponent,
        },
      ],
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RouteAdminComponent,
    RepeatTypeComponent,
  ],
})
export class RouteAdminModule {
}
