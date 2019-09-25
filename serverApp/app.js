'use strict'
const express = require('express')
const app = express()

app.get('/data', function (req, res) {
  res.json(['cat', 'dog', 'cow'])
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


