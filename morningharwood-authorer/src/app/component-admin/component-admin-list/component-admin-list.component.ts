import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {
  AdminRoute,
  Collection,
} from '../../utils/enums';


@Component({
  selector: 'app-component-admin-list',
  templateUrl: './component-admin-list.component.html',
  styleUrls: [ './component-admin-list.component.css' ],
})
export class ComponentAdminListComponent {
  public items: Observable<any[]>;
  public adminRoute: AdminRoute;

  constructor(private db: AngularFirestore) {
    this.adminRoute = AdminRoute.COMPONENT;
    this.items = this.db.collection(Collection.COMPONENT)
                     .valueChanges();
  }
}
