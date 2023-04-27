const express = require('express')
const routes = require('./routes')
const { cors, jsonParser } = require('../middlewares')

const app = express()

// Middleware
app.use(cors)
app.use(jsonParser)

// Routes
app.use('/', routes)

module.exports = app
