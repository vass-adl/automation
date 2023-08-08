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

    switch (canal) {
      case 'bbog-mb':
        const bbogMB = new BbogMB();
        servicio ?
          await bbogMB.screenshotService(page, servicio):
          await bbogMB.screenshot(page);
        break;
      
      case 'bbog-pb':
        const bbogPB = new BbogPB();
        servicio ?
          await bbogPB.screenshotService(page, servicio):
          await bbogPB.screenshot(page);
        break;

      case 'bavv-mb':
        const bavvMB = new BavvMB();
        servicio ?
          await bavvMB.screenshotService(page, servicio):
          await bavvMB.screenshot(page);
        break;

      case 'bavv-pb':
        const bavvPB = new BavvPB();
        servicio ?
          await bavvPB.screenshotService(page, servicio):
          await bavvPB.screenshot(page);
        break;
    
      default:
        break;
    }

    //console.log(`canal: ${canal}`);
    //console.log(`servicio: ${servicio}`);
  }
  
  await browser.close();

})();
