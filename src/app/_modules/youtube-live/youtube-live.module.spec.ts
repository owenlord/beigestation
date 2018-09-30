import { YoutubeLiveModule } from './youtube-live.module';

describe('YoutubeLiveModule', () => {
  let youtubeLiveModule: YoutubeLiveModule;

  beforeEach(() => {
    youtubeLiveModule = new YoutubeLiveModule();
  });

  it('should create an instance', () => {
    expect(youtubeLiveModule).toBeTruthy();
  });
});
