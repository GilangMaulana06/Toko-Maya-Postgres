require('dotenv').config()
const e = require('express')
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT
})

pool.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connect to database')
    }
})

module.exports = pool