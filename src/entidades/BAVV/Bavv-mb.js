import FilterAppName from '../../util/FilterAppName.js';

export default class BavvMB {
  
  appName = 'adl-bavv-mb';
  fileName = 'screenshot-adl-bavv-mb.jpg';

  constructor() {
    this.filterAppName = new FilterAppName(this.appName);
  }

  async screenshot(page) {
    await this.filterAppName.run(page);

    await this.filterAppName.screenshot(page, this.fileName);

    await this.filterAppName.closeFilter(page);
  }

}
