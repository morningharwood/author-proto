import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteAdminRoutingModule } from './route-admin-routing.module';
import { RouteAdminComponent } from './route-admin.component';
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
import { FormRepeatModule } from '../form-repeat/form-repeat.module';
import { FormRepeatComponent } from '../form-repeat/form-repeat.component';


@NgModule({
  imports: [
    CommonModule,
    RouteAdminRoutingModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: FormRepeatComponent,
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
    FormRepeatModule,
    AngularFirestoreModule,
  ],
  declarations: [
    RouteAdminComponent,
    RouteAdminListComponent,
  ],
})
export class RouteAdminModule {
}
