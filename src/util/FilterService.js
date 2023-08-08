import InputElement from './InputElement.js';
import ClickElement from './ClickElement.js';
import { env } from './init.js';

export default class FilterService {
  
  apiNameKeyword = 'api_name.keyword';

  constructor(apiName) {
    this.apiName = apiName;
  }

  async run(page) {
    const inputElement = new InputElement(page);
    const clickElement = new ClickElement(page);
    await clickElement.click(env.btn_add_filter_2);

    await inputElement.updateValue(env.field, this.apiNameKeyword);
    await clickElement.click(env.operador_click);

    await inputElement.updateValue(env.operador, env.operator_is);
    await clickElement.click(env.operator_is_option_1);
    
    await inputElement.updateValue(env.input_value, this.apiName);
    await clickElement.click(env.btn_save);
  }

  async screenshot(page, fileName) {
    try {
      await page.waitForSelector("#my-element-manuel");
    } catch (error) {
      console.log('Tomando screenshot: ' +  `${env.path_screenshot}/${fileName}`);
    }
    const path = `${env.path_screenshot}/${fileName}`;
    await page.screenshot({ path });
  }

}