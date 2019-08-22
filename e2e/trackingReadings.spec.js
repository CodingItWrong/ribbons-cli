describe('Tracking readings', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow the user to track readings', async () => {
    await logIn();
    await startReading();
    await markChaptersRead();
    await completeReading();
    await logOut();
  });

  async function logIn() {
    await element(by.id('email')).tap();
    await element(by.id('email')).typeText('test@example.com');

    await element(by.id('password')).tap();
    await element(by.id('password')).typeText('password');

    await element(by.id('logIn')).tap();
    await expect(element(by.id('logOut'))).toBeVisible();
  }

  async function startReading() {
    await element(by.id('startABook')).tap();
    await element(by.label('Ruth')).tap();

    await expect(element(by.id('currentChapter'))).toBeVisible();
    await expect(element(by.label('Ruth'))).toBeVisible();
    await expect(element(by.label('1'))).toBeVisible();
  }

  async function markChaptersRead() {
    await expect(element(by.label('1'))).toBeVisible();

    await element(by.id('markChapterRead')).tap();
    await expect(element(by.label('2'))).toBeVisible();

    await element(by.id('markChapterRead')).tap();
    await expect(element(by.label('3'))).toBeVisible();

    await element(by.id('markChapterRead')).tap();
    await expect(element(by.label('4'))).toBeVisible();

    await element(by.id('markChapterRead')).tap();
    await expect(element(by.id('completedBookName'))).toBeVisible();
  }

  async function completeReading() {
    await element(by.id('markBookComplete')).tap();
    await expect(element(by.id('startABook'))).toBeVisible();
  }

  async function logOut() {
    await element(by.id('logOut')).tap();
    await expect(element(by.id('email'))).toBeVisible();
  }
});
