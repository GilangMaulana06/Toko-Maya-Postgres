const express = require('express');
const app = express();
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/', (req, res) => {
//     res.send('HELLO WORLD')
// })

app.use('/api', routes)

app.listen(3000, () => {
    console.log('listening on port:3000');
});