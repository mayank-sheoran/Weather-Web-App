function subF()
{
    var query = document.getElementById('cityInput').value;
    console.log(query);
    const urll = "https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=56dea2d5f6c549faa0d2c1165f767326&units=metric#";
    ;(async () => {
        const response = await axios({
          url: urll,
          method: 'get'
        })

        for(var i=0 ; i<5 ; i++)
        {
            document.getElementById('java-html' + i).innerHTML = ""
        }


        var discription = response.data.list[0].weather[0].description
        var icon = response.data.list[0].weather[0].icon
        var temp = response.data.list[0].main.temp
        var lis = response.data.list;
        var lenn = lis.length;
        var last = lis[0].dt_txt
        var iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'

        var now = new Date();
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var curDay = days[ now.getDay() ];


        document.getElementById('java-html0').innerHTML+= '<h3 class="text-center dayy">'+ curDay.substring(0,3) + '</h3>'+
        '<img src="' + iconUrl +  '"alt="ICON" srcset="" style="width: 100%; height: 100%;">'+
        '<p class="text-center weather-disc">' + discription + '</p>'+
        '<h3 class="text-center degree", serif;">' + temp + '&#8451;</h3>'



        
        for(var i=1 ; i<lenn ; i++)
        {
            if(i==5)
            {
                break;
            }
            if(lis[i].dt_txt === last )
            {
                continue;
            }
            last = lis[i].dt_txt
            var day = days[ (now.getDay()+i)%7 ];
            var discription = response.data.list[i].weather[0].description
            var icon = response.data.list[i].weather[0].icon
            var temp = response.data.list[i].main.temp
            var iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
            document.getElementById('java-html' + i).innerHTML+= '<h3 class="text-center dayy">'+ day.substring(0,3) +'</h3>'+
            '<img src="' + iconUrl +  '"alt="ICON" srcset="" style="width: 100%; height: 100%;">'+
            '<p class="text-center weather-disc">' + discription + '</p>'+
            '<h3 class="text-center degree", serif;">' + temp + '&#8451;</h3>'

        }

      })()

      
}