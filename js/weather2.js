window.addEventListener("load", ()=>{
    let long
    let lat

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const api = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=87c637778f19465f89895cad4bf83cfa`

            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(city => {
                const locationName = city.results[0].components.city
                const forWeather = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=cb79b904798a1f67e15e9d71fb81bc11`

                $.getJSON(forWeather, function(data){
                    
                        let weatherDescription = data.weather[0].description
                        let temp = data.main.temp
                        let location = data.name
                    
                        const kelvin = temp
                        const celsius = kelvin - 273
                        let newton = celsius * ( 33 / 100 )
                        newton = Math.floor(newton)
                    
                        $(".iconDescription").append(weatherDescription)
                        $(".temperature").append(newton + " ˚C")
                        $(".location").append(location)
                
                        if (weatherDescription.includes("sun") || weatherDescription.includes("sunny") || weatherDescription.includes("clear")){
                            $(".Clouds").css("display", "none")
                            $(".overcastClouds").css("display", "none")
                            $(".moderateRain").css("display", "none")
                            $(".clearskyIcon").css("display", "block")
                        } else if (weatherDescription.includes("cloud") || weatherDescription.includes("clouds") || weatherDescription.includes("cloudy")){
                            $(".clearskyIcon").css("display", "none")
                            $(".overcastClouds").css("display", "none")
                            $(".moderateRain").css("display", "none")
                            $(".Clouds").css("display", "block")
                        } else if (weatherDescription.includes("rain") || weatherDescription.includes("rainny") || weatherDescription.includes("overcast")){
                            $(".clearskyIcon").css("display", "none")
                            $(".Clouds").css("display", "none")
                            $(".overcastClouds").css("display", "none")
                            $(".moderateRain").css("display", "block")
                        } else {
                            $(".clearskyIcon").css("display", "none")
                            $(".Clouds").css("display", "none")
                            $(".overcastClouds").css("display", "none")
                            $(".moderateRain").css("display", "none")
                        }
                    })
            })
        })
    }
})
