import { Component } from '@angular/core';
import {
  FieldArrayType,
  FormlyFormBuilder,
} from '@ngx-formly/core';


@Component({
  selector: 'app-form-repeat',
  templateUrl: './form-repeat.component.html',
  styleUrls: [ './form-repeat.component.css' ],
})
export class FormRepeatComponent extends FieldArrayType {

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}



