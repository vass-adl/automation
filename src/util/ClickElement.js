export default class ClickElement {
  constructor(page) {
    this.page = page;
  }
  async click(xpath) {
    const elementHandles = await this.page.waitForXPath(xpath);
    await elementHandles.click();
  }
}