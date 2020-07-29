const path = require('path');
const fs = require('fs');
const readdir = require('recursive-readdir');
const fsUtils = require('nodejs-fs-utils');
const puppeteer = require('puppeteer');

(async () => {
  fsUtils.mkdirsSync('_dist');
  fsUtils.emptyDirSync('_dist');

  const htmlPaths = await readdir('.', [(file, stats) => !stats.isDirectory() && !file.endsWith('.html')])
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const originalPath of htmlPaths) {
    const fileUrl = `file://${process.cwd()}/${originalPath}`;
    console.log(fileUrl);
    const copyPath = '_dist/' + originalPath;
    fsUtils.mkdirsSync(path.dirname(copyPath));
    await page.goto(fileUrl);
    const html = await page.evaluate(() => {
      return new XMLSerializer().serializeToString(document);
    });
    fs.writeFileSync(copyPath, html);
  }

  const cssPaths = await readdir('.', [(file, stats) => !stats.isDirectory() && !file.endsWith('.css')])
  for (const cssPath of cssPaths) {
    const copyPath = '_dist/' + cssPath;
    fsUtils.mkdirsSync(path.dirname(copyPath));
    fs.writeFileSync(copyPath, fs.readFileSync(cssPath).toString());
  }

  const imgPaths = await readdir('.', [(file, stats) => !stats.isDirectory() && !file.endsWith('.jpg') && !file.endsWith('.png')])
  for (const imgPath of imgPaths) {
    const copyPath = '_dist/' + imgPath;
    fsUtils.mkdirsSync(path.dirname(copyPath));
    fs.writeFileSync(copyPath, fs.readFileSync(imgPath));
  }
  
  await browser.close();
})();
