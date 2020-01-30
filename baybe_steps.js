const arr=process.argv.splice(2);
arr.reduce((a,b)=>a+b,0)
console.log(arr.reduce((a,b)=>a+parseInt(b),0))
