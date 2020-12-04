const fs = require('fs');
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('./text.txt', (err, data) => {
  if (err) {
    console.error(err);
      return;
}

console.log(data);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});