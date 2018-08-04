import { SectionAdminModule } from './section-admin.module';

describe('SectionAdminModule', () => {
  let sectionAdminModule: SectionAdminModule;

  beforeEach(() => {
    sectionAdminModule = new SectionAdminModule();
  });

  it('should create an instance', () => {
    expect(sectionAdminModule).toBeTruthy();
  });
});
