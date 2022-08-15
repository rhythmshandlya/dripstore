const express = require('express');
const app = express();
const indexRoute = require('./routes/index.routes');
app.use('/',indexRoute)

app.listen(3002,()=>{
    console.log("products service started on 3002")
})