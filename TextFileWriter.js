var fs = require('fs');
 

fs.readFile('FileToRead.txt', 'utf-8' ,function(err, data) {
    console.log(data);


    fs.writeFile('FileToWrite.txt', data, function(err, dataWritten){
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });

  });

