

const axios = require('axios');
// env
require('dotenv').config();


exports.getIndex =(req,res) => {
    res.render('index', {weather: null, title: 'Weather App'})
}
exports.getWeather =async(req, res) =>{
    try {

        const apiKey = process.env.WEATHER_kEY;
        const city = req.query.city;
        
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const weatherData = response.data;
    
        res.render('index', {weather: weatherData, title: 'Weather App'})
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    }