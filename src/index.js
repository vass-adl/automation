import puppeteer from 'puppeteer';
import { login } from './util/Login.js';
import BbogMB from './entidades/BBOG/Bbog-mb.js';
import BbogPB from './entidades/BBOG/Bbog-pb.js';
import BavvMB from './entidades/BAVV/Bavv-mb.js';
import BavvPB from './entidades/BAVV/Bavv-pb.js';
import BpopMB from './entidades/BPOP/Bpop-mb.js';
import BpopPB from './entidades/BPOP/Bpop-pb.js';
import BoccMB from './entidades/BOCC/Bocc-mb.js';
import BoccPB from './entidades/BOCC/Bocc-pb.js';

(async () => {
  // Create a new browser instance
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const pages = await browser.pages();
  const page = pages[0];

  await login(page);

  const arg = process.argv.splice(2);

  const canal = arg[0];
  const servicio = arg[1];

  if (!canal && !servicio) {
    await new BbogMB().screenshot(page);
    await new BbogPB().screenshot(page);
    await new BavvMB().screenshot(page);
    await new BavvPB().screenshot(page);
    await new BpopMB().screenshot(page);
    await new BpopPB().screenshot(page);
    await new BoccMB().screenshot(page);
    await new BoccPB().screenshot(page);
  } else {
    console.log(`canal: ${canal}`);
    console.log(`servicio: ${servicio}`);
  }
  
  await browser.close();

})();
