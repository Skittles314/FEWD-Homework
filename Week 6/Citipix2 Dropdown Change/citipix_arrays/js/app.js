var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function() {

//FIRST WAY
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
//END
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});

// Second Way, where cities is an array of cities
  for(index in cities){
    alert(cities[counter])
  }
//End

//Third Way, where cities is an array of cities
  cities.forEach(function (place){
    alert(place)
  })
//End

  