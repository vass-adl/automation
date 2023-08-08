import FilterAppName from '../../util/FilterAppName.js';
import FilterService from '../../util/FilterService.js';

export default class BpopPB {

  appName = 'adl-bpop-pb';
  fileName = 'adl-bpop-pb.jpg';

  constructor() {
    this.filterAppName = new FilterAppName(this.appName);
  }

  async screenshot(page) {
    await this.filterAppName.run(page);
    await this.filterAppName.screenshot(page, this.fileName);
    await this.filterAppName.closeFilter(page);
  }

  async screenshotService(page, serviceName) {
    await this.filterAppName.run(page);
    const filterService = new FilterService(serviceName);
    await filterService.run(page);
    const fileName = `${serviceName}_${this.fileName}`;
    await filterService.screenshot(page, fileName);
  }
}