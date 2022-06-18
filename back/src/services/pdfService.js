import path from "path";
import moment from "moment";
import hbs from "handlebars";
import fs from "fs-extra";
import puppeteer from "puppeteer";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

const compile = async function (templateName, data) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "templates",
    `${templateName}.hbs`
  );
  const html = await fs.readFile(filePath, `utf-8`);
  const insecureHandlebars = allowInsecurePrototypeAccess(hbs);
  return insecureHandlebars.compile(html)(data);
};

hbs.registerHelper("dataFormant", function (value, format) {
  return moment(value).format(format);
});

class pdfService {
  static async pdfConverter({ id }) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const filename = "myResume.pdf";
    const content = await compile("template", {});
    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "myResume.pdf",
      format: "A4",
      printBackground: true,
    });
    console.log("done");
    await browser.close();
    return filename;
  }
}

export { pdfService };
