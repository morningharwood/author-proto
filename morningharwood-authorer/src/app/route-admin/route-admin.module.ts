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
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouteAdminListComponent } from './route-admin-list/route-admin-list.component';


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
    AngularFirestoreModule,
  ],
  declarations: [
    RouteAdminComponent,
    RepeatTypeComponent,
    RouteAdminListComponent,
  ],
})
export class RouteAdminModule {
}
