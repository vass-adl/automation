import FilterAppName from '../../util/FilterAppName.js';

export default class BbogMB {

  appName = 'adl-bbog-mb';
  fileName = 'screenshot-adl-bbog-mb.jpg';

  constructor() {
    this.filterAppName = new FilterAppName(this.appName);
  }

  async screenshot(page) {
    this.filterAppName.run(page);

    try {
      await page.waitForSelector("#my-element-manuel");
    } catch (error) {

    }

    await page.screenshot({ path: this.fileName });
    await this.filterAppName.closeFilter(page);
  }
}