function subF()
{
    var query = document.getElementById('cityInput').value;
    console.log(query);

    const placeUrl = "https://pixabay.com/api/?key=16760274-2ea017f0ea3a5cb79710dd574&q=" + query + "&image_type=photo"
   


    ;(async () => {
        const response = await axios({
          url: placeUrl,
          method: 'get'
        })
        var ph = response.data.hits[0].webformatURL
        console.log(ph)
        document.getElementById('photu').innerHTML = '<img src="' + ph + '" alt="City Image" class = "photucss">'
      })()



    const urll = "https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=56dea2d5f6c549faa0d2c1165f767326&units=metric#";
    ;(async () => {
        const response = await axios({
          url: urll,
          method: 'get'
        })

        for(var i=0 ; i<4 ; i++)
        {
            document.getElementById('java-html' + i).innerHTML = ""
        }

        console.log(response)
        var discription = response.data.list[0].weather[0].description
        var icon = response.data.list[0].weather[0].icon
        var temp = response.data.list[0].main.temp

        var maxx = response.data.list[0].main.temp_max
        var minn = response.data.list[0].main.temp_min
        var humidity = response.data.list[0].main.humidity
        var wind = response.data.list[0].wind.speed
        var date = response.data.list[0].dt_txt.substring(8,10)
        var month = response.data.list[0].dt_txt.substring(5,7)
        var year = response.data.list[0].dt_txt.substring(0,4)

        var lis = response.data.list;
        var lenn = lis.length;
        var last = lis[0].dt_txt
        var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'

        var now = new Date();
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var curDay = days[ now.getDay() ];


        document.getElementById('java-html0').innerHTML+= '<h3 class="text-center dayy">Current</h3>'+
        '<div class="d-flex flex-row">'+
        '<div class="d-flex flex-column text-center">'+
        '<img src="' + iconUrl + '" alt="" style="border-right: 1px solid whitesmoke; float: left; margin: 0 1rem; padding: 0 1rem;">'+
        '<p class="weather-disc" style="border-right: 1px solid whitesmoke; float: left; margin: 0 1rem"; padding: 0 1rem;>' + discription +  '</p>'+
        '</div>'+
        '<div class="d-flex flex-column">'+
        '<p class="degree  text-center">' + temp + ' &#8451;</p>'+
        '<ul class="faltu" style="padding-left: 1rem;">'+
        '<li>Max: ' +  maxx  + ' &#8451;</li>'+
        '<li>Min: ' +  minn  + ' &#8451;</li>'+
        '<li>Humidity: ' + humidity+ '%</li>'+
        '<li>Wind: ' + wind + 'km/h</li>'+
          '</ul>'+
        '</div>'+
        '</div>'+
        '<h3 class="text-center dayy">' + date + '/' + month + '/' + year + '</h3>'




        var ii=0
        for(var i=1 ; i<lenn ; i++)
        {
            ii+=1
            if(ii===4)
            {
                break;
            }
            if(lis[i].dt_txt.substring(8,10) === last.substring(8,10) )
            {
                console.log("snfsabfjks")
                ii-=1
                continue;
            }
            last = lis[i].dt_txt
            var now = new Date()
            var day = days[ (now.getDay()+ii)%7 ];
            var discription = response.data.list[i].weather[0].description
            var icon = response.data.list[i].weather[0].icon
            var temp = response.data.list[i].main.temp
            var maxx = response.data.list[i].main.temp_max
            var minn = response.data.list[i].main.temp_min
            var humidity = response.data.list[i].main.humidity
            var wind = response.data.list[i].wind.speed
            var date = last.substring(8,10)
            var month = last.substring(5,7)
            var year = last.substring(0,4)
            var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'


            document.getElementById('java-html' + ii).innerHTML+= '<h3 class="text-center dayy">'+ day.substring(0,3) + '</h3>'+
            '<div class="d-flex flex-row">'+
            '<div class="d-flex flex-column text-center">'+
            '<img src="' + iconUrl + '" alt="" style="border-right: 1px solid whitesmoke; float: left; margin: 0 1rem; padding: 0 1rem;">'+
            '<p class="weather-disc" style="border-right: 1px solid whitesmoke; float: left; margin: 0 1rem"; padding: 0 1rem;>' + discription +  '</p>'+
            '</div>'+
            '<div class="d-flex flex-column">'+
            '<p class="degree  text-center">' + temp + ' &#8451;</p>'+
            '<ul class="faltu" style="padding-left: 1rem;">'+
            '<li>Max: ' +  maxx  + ' &#8451;</li>'+
            '<li>Min: ' +  minn  + ' &#8451;</li>'+
            '<li>Humidity: ' + humidity+ '%</li>'+
            '<li>Wind: ' + wind + 'km/h</li>'+
              '</ul>'+
            '</div>'+
            '</div>'+
            '<h3 class="text-center dayy">' + date + '/' + month + '/' + year + '</h3>'

        }

      })()

      


}

