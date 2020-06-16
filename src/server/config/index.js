const express = require('express')
const app = express()
const consign = require('consign')

consign()
  .include('server/controllers')
  .into(app)

module.exports = app