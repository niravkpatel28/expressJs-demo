const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    console.log('express server set up ');
    console.log(req);
    res.send('Welcome to express')
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return err;
    }
    console.log('server started successfully on port 3000')
})


