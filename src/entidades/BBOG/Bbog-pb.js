import FilterAppName from '../../util/FilterAppName.js';

export default class BbogPB {

  appName = 'adl-bbog-pb';
  fileName = 'screenshot-adl-bbog-pb.jpg';

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