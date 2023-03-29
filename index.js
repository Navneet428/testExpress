// const users = require("E:/json/users.json");
  
// console.log(users.language);
const fs= require("fs");
fs.readFile("users.json",function(err,data)
{
    if(err) throw err;
    const users=JSON.parse(data);
    console.log(users[0]);

})
