const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const port = process.env.PORT || 8080;



(async function example() {

  try {    
    let i = 0;
   
process.setMaxListeners(Infinity);
    while(i < 10){
   
  await delay(Math.floor((Math.random() * 4000) + 2000));
const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();
  //await page.setDefaultNavigationTimeout(Infinity); 
  await page.goto('https://arcio-server.losh531.repl.co');
  await console.log("At Website " + i)
i++;
    }
  } finally {
    await console.log("ending")
  }
})();
app.get('/', function(req, res) {
res.send(200)
    }

});

app.listen(port, function() {
    console.log('App listening on port ' + port)
})
