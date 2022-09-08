/*

    Express is a dependency which easy to server create and communicate with server than raw Node js

    Steps

    1--> Require express
    2--> Assign this express depedency in a constant
    3--> Listen this server at a fixed port number

*/
const express = require('express');

const app = express();
const PORT="3000";

app.listen(PORT,()=>{

    console.log("Server is running");

});

