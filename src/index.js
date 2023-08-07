import puppeteer from 'puppeteer';
import { login } from './util/Login.js';
import BbogMB from './entidades/BBOG/Bbog-mb.js';
import BbogPB from './entidades/BBOG/Bbog-pb.js';

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
  
  const bbogMB = new BbogMB();
  const bbogPB = new BbogPB();
  //const bavvMB = new BavvMB();
  //const bavvPB = new BavvPB();
  //const bpopMB = new BpopMB();
  //const bpopPB = new BpopPB();
  //const boccMB = new BoccMB();
  //const boccPB = new BoccPB();

  await bbogMB.screenshot(page);
  await bbogPB.screenshot(page);
  //await bavvMB.screenshot(page);
  //await bavvPB.screenshot(page);
  //await bpopMB.screenshot(page);
  //await bpopPB.screenshot(page);
  //await boccMB.screenshot(page);
  //await boccPB.screenshot(page);

  await browser.close();

})();
