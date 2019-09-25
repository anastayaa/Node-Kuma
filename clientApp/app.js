'use strict'
const express = require('express')
const app = express()
var Request = require("request")

app.get('/', function (req, res) {  
  Request.get("http://localhost:3000/data", (error, response, body) => {
    if(error) {
        return console.log(error)
    }
    res.json(body)
  })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

