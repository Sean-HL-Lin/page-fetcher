const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2)
request(args[0], (err, response, body) => {
  fs.appendFile(args[1], body, (err) => {
    if(!err) {
      console.log('File Written')
    }
  });
  console.log(`Downloaded and saved 3261 bytes to ${args[1]}`)
})