import { YoutubePlayerModule } from './youtube-player.module';

describe('YoutubeLiveModule', () => {
  let youtubeLiveModule: YoutubePlayerModule;

  beforeEach(() => {
    youtubeLiveModule = new YoutubePlayerModule();
  });

  it('should create an instance', () => {
    expect(youtubeLiveModule).toBeTruthy();
  });
});
