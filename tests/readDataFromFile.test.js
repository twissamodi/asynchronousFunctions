const {readData,readDataWithoutPromise}=require('../readDataFromFile.js');
describe('readData function',()=>{
    it('should read and display the data in fruits.txt in form of an array',()=>{
        return readData('fruits.txt').then(data=>expect(data).toStrictEqual([ 'apple', 'banana', 'grapes', 'strawberry' ]));
    });
    it('should give an error if a non-existent file is passed as an argument',()=>{
        return readData('noSuchFileExist.txt').then(null,data=>expect(data.message).toBe('File cannot be opened'));
    });
});    
    
