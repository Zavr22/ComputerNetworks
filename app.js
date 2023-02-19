const express = require('express')
const {json} = require("express");

const app = express()
const jsonParser = express.json();
app.use(express.static(__dirname + '/public'))

app.post('/app', jsonParser, function (request, response) {
    console.log(request.body)
    const obj = JSON.parse(JSON.stringify(request.body));
    let string = obj.str
    const len = string.length;
    let s1;
    let s2;
    if (len%4 == 0){
        s1 = string.slice(0, len/2)
        s2 = string.slice(len/2)
    }

    let s3 = s2.concat(s1)
    console.log(s3)
    response.send(s3)


})

    app.use('/', function (request, response) {
    response.send('<h1>Главная страница</h1>')
})

app.listen(3000)




