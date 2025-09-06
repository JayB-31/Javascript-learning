const { JSDOM } = require("jsdom");
const dom = new JSDOM(`
<!DOCTYPE html>
<body>
  <button class="button">One</button>
  <button class="button">Two</button>
</body>
`);

const document = dom.window.document;

const buttons = document.querySelectorAll('.button');
console.log(buttons);