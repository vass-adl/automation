import { env } from './init.js';
import InputElement from './InputElement.js';
import ClickElement from './ClickElement.js';

export const login = async (page) => {
  await page.goto(env.url);

  const inputElement = new InputElement(page);
  const clickElement = new ClickElement(page);

  await inputElement.updateValue(env.input_user, env.user);
  await inputElement.updateValueAndEnter(env.input_password, env.password);

  await clickElement.click(env.btn_api_calls);
}