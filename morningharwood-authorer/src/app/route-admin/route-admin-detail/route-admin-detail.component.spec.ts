import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdminDetailComponent } from './route-admin-detail.component';

describe('RouteAdminDetailComponent', () => {
  let component: RouteAdminDetailComponent;
  let fixture: ComponentFixture<RouteAdminDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAdminDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
