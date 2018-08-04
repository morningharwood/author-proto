import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FieldArrayType,
  FormlyFieldConfig,
  FormlyFormBuilder,
  FormlyFormOptions,
} from '@ngx-formly/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-route-admin',
  templateUrl: './route-admin.component.html',
  styleUrls: [ './route-admin.component.css' ],
})
export class RouteAdminComponent {
  private ref: AngularFirestoreCollection<any>;
  private currentItem: any = {};

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.ref = db.collection('routes');

  }

  form = new FormGroup({});
  model = {
    router: [ this.route.snapshot.data[ 'routeDetail' ] ],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'router',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add',
        },
        fieldGroup: [
          {
            type: 'input',
            key: 'routePath',
            templateOptions: {
              label: 'Route Path',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'routeName',
            templateOptions: {
              label: 'Name of Route',
              required: true,
            },
          },
        ],
      },
    },
  ];

  submit() {
    this.ref.doc(this.model.router[ 0 ][ 'routePath' ])
        .set(this.model.router[ 0 ], { merge: true });
  }
}


@Component({
  selector: 'formly-repeat-section',
  styleUrls: [ './route-admin.component.css' ],
  template: `
    <section class="section-wrapper">
      <div class="bump-20"
           *ngFor="let field of field.fieldGroup; let i = index;">
        <formly-group
          [model]="model[i]"
          [field]="field"
          [options]="options"
          [form]="formControl">
          <button mat-raised-button type="button" (click)="remove(i)">
            Remove
          </button>
        </formly-group>
      </div>
      <div class="submit-button">

        <button mat-fab class="fab-position" type="button"
                (click)="add()">{{ field.fieldArray.templateOptions.btnText }}
        </button>
      </div>
    </section>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
