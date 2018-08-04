import { ComponentAdminModule } from './component-admin.module';

describe('ComponentAdminModule', () => {
  let componentAdminModule: ComponentAdminModule;

  beforeEach(() => {
    componentAdminModule = new ComponentAdminModule();
  });

  it('should create an instance', () => {
    expect(componentAdminModule).toBeTruthy();
  });
});
