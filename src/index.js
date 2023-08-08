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

  const arg = process.argv.splice(2);

  const canal = arg[0];
  const servicio = arg[1];

  if (!canal && !servicio) {
    await login(page);
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
        await login(page);
        const bbogMB = new BbogMB();
        servicio ?
          await bbogMB.screenshotService(page, servicio):
          await bbogMB.screenshot(page);
        break;
      
      case 'bbog-pb':
        await login(page);
        const bbogPB = new BbogPB();
        servicio ?
          await bbogPB.screenshotService(page, servicio):
          await bbogPB.screenshot(page);
        break;

      case 'bavv-mb':
        await login(page);
        const bavvMB = new BavvMB();
        servicio ?
          await bavvMB.screenshotService(page, servicio):
          await bavvMB.screenshot(page);
        break;

      case 'bavv-pb':
        await login(page);
        const bavvPB = new BavvPB();
        servicio ?
          await bavvPB.screenshotService(page, servicio):
          await bavvPB.screenshot(page);
        break;

      case 'bpop-mb':
        await login(page);
        const bpopMB = new BpopMB();
        servicio ?
          await bpopMB.screenshotService(page, servicio):
          await bpopMB.screenshot(page);
        break;

      case 'bpop-pb':
        await login(page);
        const bpopPB = new BpopPB();
        servicio ?
          await bpopPB.screenshotService(page, servicio):
          await bpopPB.screenshot(page);
        break;

      case 'bocc-mb':
        await login(page);
        const boccMB = new BoccMB();
        servicio ?
          await boccMB.screenshotService(page, servicio):
          await boccMB.screenshot(page);
        break;

      case 'bocc-pb':
        await login(page);
        const boccPB = new BoccPB();
        servicio ?
          await boccPB.screenshotService(page, servicio):
          await boccPB.screenshot(page);
        break;
    
      default:
        console.log(`canal desconocido: ${canal} `);
        break;
    }

  }
  
  await browser.close();

})();
