import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import {
  first,
  map,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  AdminRoute,
  Collection,
} from '../utils/enums';


@Injectable()
export class RouteResolve implements Resolve<any> {
  constructor(private db: AngularFirestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const routeMap = {
      [ AdminRoute.ROUTE ]: Collection.ROUTES,
      [ AdminRoute.COMPONENT ]: Collection.COMPONENT,
      [ AdminRoute.SECTION ]: Collection.SECTION,
    };

    return this.db
               .collection(routeMap[ route.url[ 0 ].path ])
               .doc(route.params.id)
               .valueChanges()
               .pipe(first(), map((i) => {
                 if (i) {
                   return i;
                 }
               }));
  }
}
