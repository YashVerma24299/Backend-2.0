import {z} from 'zod'
const ageSchema =z.number().min(6).max(10).int();

const userAge1 = 9
const userAge2 = 19
const userAge3 = 6

const parseUserAge1 = ageSchema.parse(userAge1);
console.log("parseUserAge1: ", parseUserAge1);
// const parseUserAge2 = ageSchema.parse(userAge2);
// console.log("parseUserAge2: ", parseUserAge2);

const {data, success, error} = ageSchema.safeParse(userAge3);
console.log(data);
console.log(success);
console.log(error);


// coerce -> convert string to number
const portSchema = z.coerce.number().min(1).max(9999).default(3000);
const PORT='3000'
// const PORT=''
// const PORT='3000000'
const checkPort = portSchema.parse(PORT);
console.log("CheckPort:",checkPort)
