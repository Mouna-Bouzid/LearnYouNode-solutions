const fs=require ('fs')
const path=require('path')


fs.readdir(process.argv[2],'utf8',function(error,fileList){
    if (error) {
    console.error(error)
    return;
}
const filteredFiles = fileList.filter((file) => {
    return path.extname(file) === '.' + process.argv[3];
});

filteredFiles.forEach((file) => {
    console.log(file);
});
    
})


