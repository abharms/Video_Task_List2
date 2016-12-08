import { VideoTaskList2Page } from './app.po';

describe('video-task-list2 App', function() {
  let page: VideoTaskList2Page;

  beforeEach(() => {
    page = new VideoTaskList2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
