import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRepeatComponent } from './form-repeat.component';
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


@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  declarations: [
    FormRepeatComponent,
  ],
  exports: [
    FormRepeatComponent,
  ],
})
export class FormRepeatModule {
}
