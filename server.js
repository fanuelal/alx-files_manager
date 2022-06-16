import route from './routes/index';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`app listening on port : ${PORT}`);
});
app.use('/', route);

module.exports = app;
