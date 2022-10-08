const jwt = require('jsonwebtoken');

const user = (res,req)=>{
    console.log("Just for testiong");
}
const token = user.getJWTToken();

console.log(token)