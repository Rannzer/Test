const fs = require('fs')

const first = fs.readFileSync('./content/first.txt','utf8')
const second = fs.readFileSync('./content/second.txt','utf8')

console.log(first, second)

fs.writeFileSync(
    './content/result.txt', `Here is our result ${first}, ${second} `
)

fs.writeFileSync(
    './content/result.txt', `Here is our result ${first}, ${second}. `,{flag: 'a'}
)

fs.readFile('./content/first.txt', 'utf8' ,(err,result)=>{
    if(err){
        console.log(`err : `, err)
        return
    }
    const first = result
    fs.readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log('err : ',err)
            return
        }
        const second = result
        fs.writeFile('./content/result.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log('err : ',err)
                return
            }
            console.log(result)
            fs.readFile('./content/result.txt','utf8',(err,result)=>{
                if(err){
                    console.log('err : ',err)
                    return
                }
                console.log(result)
            })
        })
    })
})