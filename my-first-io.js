const fs=require('fs')

const linesNbr=fs.readFileSync(process.argv[2]).toString()
let arr=linesNbr.split('\n')
console.log(arr.length-1)
