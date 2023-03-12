const { error } = require('console');
const fs = require('fs');

function removeComments(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    let lines = data.split('\n');
    let newLines = [];
    for (let line of lines) {
      if (!line.startsWith('/'))
      {
        newLines.push(line);
      }
      
    }
    fs.writeFile(filePath, newLines.join('\n'), (err) => {
      if (err) {
        throw err;
      }
      console.log('Comments removed successfully');
    });
  });
}

removeComments('test.txt');

fs.readFile('test.txt', 'utf8', (err, data)=>
{
    if(err)
    {
        console.error(err)
        return;
    }
    console.log(data);
})