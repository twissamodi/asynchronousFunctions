const fs=require('fs');
const readData=(fileName)=>{
    return new Promise((fulfill,reject)=>{
        fs.readFile(fileName, (error, fruits) => {
        if (error){
            return reject(new Error('File cannot be opened'));
        }
        return fulfill(fruits.toString().split('\r\n'));
    });
});
};
const readDataWithoutPromise=(fileName)=>{
    fs.readFile(fileName,(error,fruits)=>{
        if(error){
            throw new Error('File cannot be opened');
        }
        console.log(fruits.toString().split('\r\n'));
    });
};

//readData('f.txt').then(value=>{console.log(value)},value=>console.log(value));

module.exports={
    readData,
    readDataWithoutPromise,
};
