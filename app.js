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
    let pal = true;
    // Use for loop to divide the words into 2 half
    for (let i = 0; i < len / 2; i++) {

        // validate the first and last characters are same
        if (string[i] !== string[len - 1 - i]) {

            pal=false
        }

    }
if (pal === true){
        response.json("palindrome")
    }
    else {
        response.json("not palindrome")
    console.log("kkk")
    }

})

    app.use('/', function (request, response) {
    response.send('<h1>Главная страница</h1>')
})

app.listen(3000)




