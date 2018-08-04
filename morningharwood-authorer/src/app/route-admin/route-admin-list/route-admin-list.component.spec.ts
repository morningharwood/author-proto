import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdminListComponent } from './route-admin-list.component';

describe('RouteAdminListComponent', () => {
  let component: RouteAdminListComponent;
  let fixture: ComponentFixture<RouteAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
