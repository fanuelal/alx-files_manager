var express = require('express');
var app = express();
const PORT = 4000;

app.get('routes/index.j', (req, res) =>{
    res.send()
})

app.listen(port,() => {
    console.log(`app listening on port : ${port}`);
})