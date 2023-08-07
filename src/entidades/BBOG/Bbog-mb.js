import FilterAppName from '../../util/FilterAppName.js';

export default class BbogMB {

  appName = 'adl-bbog-mb';
  fileName = 'screenshot-adl-bbog-mb.jpg';

  constructor() {
    this.filterAppName = new FilterAppName(this.appName);
  }

  async screenshot(page) {
    await this.filterAppName.run(page);

    await this.filterAppName.screenshot(page, this.fileName);

    await this.filterAppName.closeFilter(page);
  }
}