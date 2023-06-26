const express = require('express');
const data = require('../controller/data.controller')

const router = express.Router()

router.get('/data', data.getData)
router.post('/data', data.insertData)
router.put('/data', data.updateData)
router.delete('/data', data.deleteData)

module.exports = router