import {
  Component,
  OnInit,
} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
} from '@ngx-formly/core';
import {
  Collection,
  Resolve,
} from '../../utils/enums';
import { schema } from './schema';


const CURRENT_COLLECTION = Collection.ROUTES;
const CURRENT_DOCUMENT = 'routePath';

@Component({
  selector: 'app-route-admin-detail',
  templateUrl: './route-admin-detail.component.html',
  styleUrls: [ './route-admin-detail.component.css' ],
})
export class RouteAdminDetailComponent implements OnInit {
  private ref: AngularFirestoreCollection<any>;
  public model: any;
  public options: FormlyFormOptions;
  public fields: FormlyFieldConfig[];
  public form: FormGroup;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.ref = db.collection(CURRENT_COLLECTION);
  }

  ngOnInit() {
    this.options = {};
    this.fields = schema(CURRENT_COLLECTION, CURRENT_DOCUMENT);
    this.model = {
      [ CURRENT_COLLECTION ]: [ this.route.snapshot.data[ Resolve.DETAILS ] ],
    };
    this.form = new FormGroup({});
  }


  submit() {
    this.ref
        .doc(this.model[ CURRENT_COLLECTION ][ 0 ][ CURRENT_DOCUMENT ])
        .set(this.model[ CURRENT_COLLECTION ][ 0 ], { merge: true });
  }
}
