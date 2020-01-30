const filteredList=require('./mymodule')

filteredList(process.argv[2], process.argv[3],(error, fileList) => {
    if(error) {
        return console.error(error);
    }
fileList.forEach((file)=>{console.log(file)})    
})