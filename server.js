import route from './routes/index.js';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('./routes/index.js', (req, res) =>{
    res.send()
})

app.listen(PORT,() => {
    console.log(`app listening on port : ${PORT}`);
})