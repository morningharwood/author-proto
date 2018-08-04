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


