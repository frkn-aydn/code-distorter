const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Where is the file? ', (answer) => {
    fs.readFile(answer, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {

            var result = data.replace(/;/g, ';');
            fs.writeFile(answer, result, 'utf8', function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Now sit down and watch the programmer :)")
                }
                rl.close();
            });
        }
        rl.close();
    });
});