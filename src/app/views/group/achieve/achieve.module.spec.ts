import { AchieveModule } from './achieve.module';

describe('AchieveModule', () => {
  let achieveModule: AchieveModule;

  beforeEach(() => {
    achieveModule = new AchieveModule();
  });

  it('should create an instance', () => {
    expect(achieveModule).toBeTruthy();
  });
});
