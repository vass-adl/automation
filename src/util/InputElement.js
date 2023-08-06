export default class InputElement {
  constructor(page) { 
    this.page = page;
  }
  async updateValue(xpath, value) {
    const elementHandles = await this.page.waitForXPath(xpath);
    await elementHandles.type(value);
  }
  async updateValueAndEnter(xpath, value) {
    const elementHandles = await this.page.waitForXPath(xpath);
    await elementHandles.type(value);
    await elementHandles.press('Enter');
  }
}