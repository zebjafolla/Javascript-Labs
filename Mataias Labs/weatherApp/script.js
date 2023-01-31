const api = {
    key: "170aadd91a5794d8bb8d3d2a4fb78a2b",
    base: "http://api.openweathermap.org/data/2.5/",
}

    const searchBar = document.querySelector('.content_location_header');
    searchBar.addEventListener('keypress', (e) => {
        if (e.keyCode == '13')
        {   
            let entry = searchBar.value;
            getInfo(searchBar.value);

        }
    })

    function getInfo(entry)
    {
        fetch(`${api.base}weather?q=${entry}&appid=${api.key}`)
            .then((response) => 
            {
                return response.json();
                
            })
            .then((response) => 
            {
                fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=${api.key}`)
                .then((res) => 
                {
                    return res.json();
                })
                .then((res) => 
                {
                    let city = document.querySelector('.location .city_name');
                    if(res[0].state == null)
                    {
                        city.innerText = `${res[0].name}, ${res[0].country}`;
                    }
                    else 
                    {
                        city.innerText = `${res[0].name}, ${res[0].state}, ${res[0].country}`;
                    }
                    deepai.setApiKey('b5ed524e-6a52-4af8-81d7-12aa2bf6ffa7');
                    (async function() {
                    var resp = await deepai.callStandardApi("text2img", {
                        text: `${res[0].name}, ${res[0].country}, ${response.weather.main}`,
                        grid_size: "1",
                    });
                    document.body.style.backgroundImage = `url(${resp.output_url})`;
                    })()
                })
                return response;
            })
            .then(getRealCity);
        }

function getRealCity(response)
{
    fetch(`${api.base}weather?lat=${response.coord.lat}&lon=${response.coord.lon}&units=imperial&appid=${api.key}`)
        .then((info) => {
            return info.json();
        })
        .then(displayResults);
}

function displayResults(info){


    let todaysDate = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = todaysDate.toDateString();

    let temp = document.querySelector('.degree');
    temp.innerText = `${Math.round(info.main.temp)}°F`;

    let type = document.querySelector('.weather_type');
    type.innerText = `${info.weather[0].main}`;

    let img = document.createElement('img');
    let attClass = document.createAttribute('class');
    attClass.value = 'image';
    let attSrc = document.createAttribute('src');
    attSrc.value = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    img.setAttributeNode(attSrc);
    type.appendChild(img);

    let hilo = document.querySelector('.hilo');
    hilo.innerText = `Hi: ${Math.round(info.main.temp_max)}° | Lo: ${Math.round(info.main.temp_min)}°`;
}












