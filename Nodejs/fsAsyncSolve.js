const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt')
        const second = await readFilePromise('./content/second.txt')
        await writeFilePromise('./content/newResultFile.txt',`This is awsome : ${first} , ${second}. `,{flag:'a'})
        const newFile = await readFilePromise('./content/newResultFile.txt','utf8')
        console.log(newFile)
    }
    catch(err){
        console.log(err)
    }
}

start()






// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async() =>{
//     try{
//         const first = await getText('./content/first.txt')
//         console.log(first)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// start()

// getText('./content/first.txt').then(result => console.log(result)).catch((err)=> console.log(`err:`, err))
