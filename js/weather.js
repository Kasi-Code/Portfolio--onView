const { get } = require("mongoose")

const successfulLookup = position => {
    getLocationName(position).then(getWeatherData)
 }
 
 navigator.geolocation.getCurrentPosition(successfulLookup)
 
 const getLocationName = async position => {
   const {lat, long } = position
   const forFetch = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=87c637778f19465f89895cad4bf83cfa`
   console.log(forFetch)
 
   // return the fetch promise
   const response = await fetch(forFetch)
     const res = await response.json()
     return res.results[0].components.village
   //.then(console.log) must reurn data after this log !!
 }
 
 const getWeatherData = async locationName => {
   const forWeather = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=cb79b904798a1f67e15e9d71fb81bc11`
 
   const res = await fetch(forWeather)
     const data = await res.json()
    //  // consume the wather data
    //  console.log(data)
     
     $.getJSON(forWeather, function(data){
    // console.log(data)
    
        let weatherDescription = data.weather[0].description
        let temp = data.main.temp
        let location = data.name
    
        const kelvin = temp
        let celsius = kelvin - 273.15
        // let newton = celsius * ( 33 / 100 )
        celsius = Math.floor(celsius)
    
        $(".iconDescription").append(weatherDescription)
        $(".temperature").append(celsius + " ˚C")
        $(".location").append(location)

        const today = new Date()
        const getHour = today.getHours()

        if (weatherDescription.includes("sun") || weatherDescription.includes("sunny") || weatherDescription.includes("clear") && getHour > 6 && getHour < 18){
            $(".clearskyIcon").css("display", "block")
        } else if (weatherDescription.includes("sun") || weatherDescription.includes("sunny") || weatherDescription.includes("clear") && getHour <= 6 && getHour >= 18){
            $(".clearSkyNight").css("display", "block")
        } else if (weatherDescription.includes("cloud") || weatherDescription.includes("clouds") || weatherDescription.includes("cloudy")){
            $(".Clouds").css("display", "block")
        } else if (weatherDescription.includes("rain") || weatherDescription.includes("rainny") || weatherDescription.includes("overcast")){
            $(".moderateRain").css("display", "block")
        } else if (weatherDescription.includes("snow")){
            $(".snow").css("display", "block")
        } else {
            $(".clearskyIcon").css("display", "none")
            $(".Clouds").css("display", "none")
            $(".overcastClouds").css("display", "none")
            $(".moderateRain").css("display", "none")
            $(".snow").css("display", "none")
            $(".clearSkyNight").css("display", "none")
        }
    })
 }