import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentAdminRoutingModule } from './component-admin-routing.module';
import { ComponentAdminDetailComponent } from './component-admin-detail/component-admin-detail.component';
import { ComponentAdminListComponent } from './component-admin-list/component-admin-list.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormRepeatComponent } from '../form-repeat/form-repeat.component';
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
import { FormRepeatModule } from '../form-repeat/form-repeat.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  imports: [
    ComponentAdminRoutingModule,
    CommonModule,
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
    ComponentAdminDetailComponent,
    ComponentAdminListComponent,
  ],
})
export class ComponentAdminModule {
}
