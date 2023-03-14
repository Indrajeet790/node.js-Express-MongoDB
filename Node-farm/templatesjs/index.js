const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules.js/replaceTemplate.js.js");

// server

const tempOverview = fs.readFileSync(
  "./Node-farm/templatesjs/templatess/template-overview.html",
  "utf-8"
);

const tempCard = fs.readFileSync(
  "./Node-farm/templatesjs/templatess/template-card.html",
  "utf-8"
);

const tempProduct = fs.readFileSync(
  "./Node-farm/templatesjs/templatess/template-product.html",
  "utf-8"
);

const data = fs.readFileSync("./Node-farm/templatesjs/dev-data", "utf-8");

const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

// server
const server = http.createServer((req, resp) => {
  const { query, pathname } = url.parse(req.url, true);

  // overview page
  if (pathname === "/" || pathname === "/overview") {
    resp.writeHead(200, { "content-type": "text/html" });

    const cardHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    // console.log(cardHtml);
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardHtml);
    resp.end(output);
  }
  // product page
  else if (pathname === "/product") {
    resp.writeHead(200, { "content-type": "text/html" });

    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    resp.end(output);
  }
  // Api
  else if (pathname === "/api") {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.end(data);
  }
  // NOT FOUND
  else {
    resp.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    resp.end("<h1>Page Not Found</h1>");
  }
});
server.listen(7000, "127.0.0.1", () => {
  console.log("listiening to response on port 7000");
});
