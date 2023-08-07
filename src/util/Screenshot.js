export default class Screenshot {
  constructor(page) { 
    this.page = page;
  }
  async run(path, callback) {
    await new Promise(r => setTimeout(async ()=> {
      await this.page.screenshot({ path });
      callback()
    }, 5000));
  }
}