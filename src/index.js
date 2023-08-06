import puppeteer from 'puppeteer';
import { env } from './util/init.js';
import InputElement from './util/InputElement.js';
import ClickElement from './util/ClickElement.js';

(async () => {
  // Create a new browser instance
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  // Navigate to the Google homepage
  const pages = await browser.pages();
  const page = pages[0];

  await page.goto(env.url);

  const inputElement = new InputElement(page);
  const clickElement = new ClickElement(page);

  await inputElement.updateValue(env.input_user, env.user);
  await inputElement.updateValueAndEnter(env.input_password, env.password);

  await clickElement.click(env.btn_api_calls);
  await clickElement.click(env.btn_add_filter);

  await inputElement.updateValue(env.field, 'app_name.keyword');
  
  await clickElement.click(env.operador_click);

  await inputElement.updateValue(env.operador, env.operator_is);

  await clickElement.click(env.operator_is_option_1);

  await inputElement.updateValue(env.input_value, env.app_name_keyword_bbog_mb);

  await clickElement.click(env.btn_save);

  ///await clickElement.click(kibana_close_filter);

  async function toppic1() {
    console.log('Hola Mundo!');
    // Close the browser
    await browser.close();
  }

  // primera parte
  new Promise(r => setTimeout(toppic1, 10000));

})();
