var express = requires("express")
var bodyParser = require("body-parser")
var cors = require("cors")

var app= express()

app.get('/api/hello', function(request,response) {

  response.json('Hello!')
})

app.listen(3006, function(){
  console.log('working on 3006')
})
