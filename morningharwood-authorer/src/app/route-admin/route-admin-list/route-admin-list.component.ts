import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-route-admin-list',
  templateUrl: './route-admin-list.component.html',
  styleUrls: ['./route-admin-list.component.css']
})
export class RouteAdminListComponent implements OnInit {
  private items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.items = this.db.collection('routes').valueChanges();
  }

  ngOnInit() {
  }

}
