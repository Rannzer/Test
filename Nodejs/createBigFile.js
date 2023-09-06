const {writeFileSync} = require('fs')

for(let i = 0; i < 10000; i++){
    writeFileSync('./content/createBigFile.txt',`Hello World ${i}th time\n`,{flag:'a'})
}