const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const filepath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(`${filepath}/index.html`)
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.post('/', (req, res) => {
    
})

/*
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1cdc5bf6abf70ae6ca69a708a09393eb&units=metric';
    https.get(url, (resp) => {
        console.log(resp.statusCode);

        resp.on('data', (data) => {
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const pressure = weatherData.main.pressure;
            const humidity = weatherData.main.humidity;

            res.write('<p>Weather is ' + desc + '</p>')
            res.write('<p>temperature is' + temp + '</p>');
            res.write('<p>humidity is ' + humidity + '</p>');
            res.write('<p>pressure is ' + pressure + '</p>');
            res.send();
        })
    })
*/