import { RouteAdminModule } from './route-admin.module';

describe('RouteAdminModule', () => {
  let routeAdminModule: RouteAdminModule;

  beforeEach(() => {
    routeAdminModule = new RouteAdminModule();
  });

  it('should create an instance', () => {
    expect(routeAdminModule).toBeTruthy();
  });
});
