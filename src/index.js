import puppeteer from 'puppeteer';
import { login } from './util/Login.js';
import BbogMB from './entidades/BBOG/Bbog-mb.js';
import BbogPB from './entidades/BBOG/Bbog-pb.js';
import BavvMB from './entidades/BAVV/Bavv-mb.js';
import BavvPB from './entidades/BAVV/Bavv-pb.js';

(async () => {
  // Create a new browser instance
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const pages = await browser.pages();
  const page = pages[0];

  login(page);
  
  await new BbogMB().screenshot(page);
  await new BbogPB().screenshot(page);
  await new BavvMB().screenshot(page);
  await new BavvPB().screenshot(page);
  //const bavvMB = new BavvMB();
  //const bavvPB = new BavvPB();
  //const bpopMB = new BpopMB();
  //const bpopPB = new BpopPB();
  //const boccMB = new BoccMB();
  //const boccPB = new BoccPB();



  await browser.close();

})();
