const express = require('express');
const app = express();
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const pool = require('./database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/', (req, res) => {
//     res.send('HELLO WORLD')
// })

// app.use('/api', routes)
app.use('/api', (req, res) => {
    if(req.method === 'GET'){
        res.json([
            {nama : 'Gilang', umur : '25'},
            {nama : 'haikal', umur : '15'},
        ])
    } else {
        res.send({message: 'INI POST'})
    }
})

app.listen(3000, () => {
    console.log('listening on port:3000');
});