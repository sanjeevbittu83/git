const fs = require('fs');
const express = require('express')
const app = express()
const PORT = process.env.port || 3000
const hostname = '127.0.0.1';

  const readFile = (fileName, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

readFile('./text.txt')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    app.listen(PORT, hostname, () => {
        console.log(`Server running at http://${hostname}:${PORT}/`);
      });