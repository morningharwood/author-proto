import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {
  AdminRoute,
  Collection,
} from '../../utils/enums';


@Component({
  selector: 'app-route-admin-list',
  templateUrl: './route-admin-list.component.html',
  styleUrls: [ './route-admin-list.component.css' ],
})
export class RouteAdminListComponent {
  public items: Observable<any[]>;
  public adminRoute: AdminRoute;
  constructor(private db: AngularFirestore) {
    this.adminRoute = AdminRoute.ROUTE;
    this.items = this.db.collection(Collection.ROUTES)
                     .valueChanges();
  }
}
