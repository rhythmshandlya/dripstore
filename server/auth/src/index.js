const express = require('express');
const app = express();
const indexRoute = require('./routes/index.routes');
app.use('/',indexRoute)

app.listen(3001,()=>{
    console.log("auth service started on 3001")
})