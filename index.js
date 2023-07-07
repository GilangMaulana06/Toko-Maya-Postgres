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
app.use('/api', async (req, res) => {
    try {
        const data = await pool.query(
            `SELECT * FROM data`
        )
        res.json(data.rows).status(200)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

app.listen(3000, () => {
    console.log('listening on port:3000');
});