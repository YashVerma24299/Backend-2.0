const path = require('path');
console.log(__dirname); // folder tak
console.log(__filename); // include Files

const filePath = path.join("folder", "student","data.txt")
console.log(filePath); 
const filePath2 = path.join(__dirname,"folder", "student","data.txt")  //ADDED THESE 3 IN CURRENT PORTION
console.log(filePath2); 


const parseData = path.parse(filePath)
const resolvedPath = path.resolve(filePath)
const extname = path.extname(filePath)
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)

console.log({parseData, resolvedPath, extname, basename, dirname});