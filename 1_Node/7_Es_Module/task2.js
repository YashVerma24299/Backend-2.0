// Create a CLI File Creation App using node

import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation =()=>{
    rl.question('Enter the filename: ', (filename)=>{
        rl.question("Enter the content for your file: ", (content)=>{
            fs.writeFile(`${filename}.txt`, content, (error)=>{
                if(error){
                    console.log(`Error: ${error}`);
                }else{
                    console.log(`File ${filename}.txt created successfully!`);
                }
                rl.close();
            })
        })
    })
}

fileCreation();