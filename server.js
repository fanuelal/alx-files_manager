var express = require('express');
var app = express();
const PORT = 5000;

app.get('routes/index.j', (req, res) =>{
    res.send()
})

app.listen(PORT,() => {
    console.log(`app listening on port : ${PORT}`);
})