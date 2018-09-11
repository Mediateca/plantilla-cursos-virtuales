import { MdtkModule } from './mdtk.module';

describe('MdtkModule', () => {
  let mdtkModule: MdtkModule;

  beforeEach(() => {
    mdtkModule = new MdtkModule();
  });

  it('should create an instance', () => {
    expect(mdtkModule).toBeTruthy();
  });
});
