import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { RouteAdminModule } from './route-admin/route-admin.module';
import { RouterModule } from '@angular/router';
import { SectionAdminModule } from './section-admin/section-admin.module';
import { ComponentAdminModule } from './component-admin/component-admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    RouteAdminModule,
    RouterModule.forRoot([]),
    SectionAdminModule,
    ComponentAdminModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
