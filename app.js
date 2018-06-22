'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/ut', api)

module.exports = app