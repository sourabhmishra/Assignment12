var fs = require('fs');

fs.readFile('FileToRead.txt', 'utf-8' ,function(err, data) {
  console.log(data);
});