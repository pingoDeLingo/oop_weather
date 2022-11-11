class Weather{
    constructor(city) {
        this.city = city;
        this.key = '82ada96bdd6be5d8a4d0ea1c7e67749e';
    }
        async getWeather(){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
            const responseData = await response.json()
            return responseData
        }
    }