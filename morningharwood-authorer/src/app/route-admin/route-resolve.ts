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


@Injectable()
export class RouteResolve implements Resolve<any> {
  constructor(private db: AngularFirestore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const routeMap = {
      [ route.url[ 0 ].path ]: 'routes',
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
