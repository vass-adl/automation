import FilterAppName from '../../util/FilterAppName.js';

export default class BbogPB {

  appName = 'adl-bbog-pb';
  fileName = 'screenshot-adl-bbog-pb.jpg';

  constructor() {
    this.filterAppName = new FilterAppName(this.appName);
  }

  async screenshot(page) {
    await this.filterAppName.run(page);

    await this.filterAppName.screenshot(page, this.fileName);

    await this.filterAppName.closeFilter(page);
  }
}