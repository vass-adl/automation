import { config } from 'dotenv';

config()

const url = process.env.URL_KIBANA || '';
const user = process.env.KIBANA_USER || '';
const password = process.env.KIBANA_PASSWORD || '';
const input_user = process.env.INPUT_USER || '';
const input_password = process.env.INPUT_PASSWORD || '';
const btn_api_calls = process.env.BTN_API_CALLS || '';

const btn_add_filter = process.env.KIBANA_BTN_ADD_FILTER || '';
const field = process.env.KIBANA_FIELD || '';
const operador = process.env.KIBANA_OPERATOR || '';
const operador_click = process.env.KIBANA_OPERATOR_CLICK || '';
const input_value = process.env.KIBANA_INPUT_VALUE || '';
const btn_save = process.env.KIBANA_BTN_SAVE || '';

const app_name_keyword_bbog_mb = process.env.APP_NAME_KEYWORD_BBOG_MB || '';
const operator_is = process.env.OPERATOR_IS || '';
const operator_is_option_1 = process.env.OPERATOR_IS_OPTION_1 || '';

const kibana_close_filter = process.env.KIBANA_CLOSE_FILTER || '';

export const env = {
  url,
  user,
  password,
  input_user,
  input_password,
  btn_api_calls,
  btn_add_filter,
  field,
  operador,
  operador_click,
  input_value,
  btn_save,
  app_name_keyword_bbog_mb,
  operator_is,
  operator_is_option_1,
  kibana_close_filter
}