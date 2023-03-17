const fs = require('fs');

const superAgent = require('superagent');

fs.readFile(`Asynchronous-js/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superAgent.get(`https://dog.ceo/api/breeds/image/random`).end((err, resp) => {
    console.log(resp?.body?.message);

    fs.writeFile('Asynchronous-js/dog-img.txt', resp?.body?.message, (err) => {
      console.log('random dog image save to file');
    });
  });
});
