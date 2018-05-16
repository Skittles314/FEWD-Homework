$(document).ready(function(){



    function updateCity(){
        // grab the value in the city text box, store it as the city variable:
        var city = $("#city-type").val()

        // output city to the js console:
        console.log(city)

        /* the "trim "below makes it so that any spaces before or after word input 
        from end user gets eliminated so that the search will still return correct value. the
        toLowerCase part makes it so that it reads both upper and lower case inputs - makes
        it not case sensitive */
        city = city.toLowerCase().trim() 

        // if city is "la", change the backgrond to images/la.jpg:
        if(city == "la" || city=="los angeles"){
            $("body").attr("class", "la")
        }

        else if(city=="sf" || city=="san francisco"){
        	$("body").attr("class", "sf")
        }

        else if(city=="austin"){
        	$("body").attr("class", "austin")
        }

        else if(city=="sydney"){
        	$("body").attr("class", "sydney")
        }

        else{
        	$("body").attr("class","nyc")
        }


        // blank out the text box:
        $("#city-type").val("")

        // prevent the default action after form submit (page reload):
        event.preventDefault()
    }

    // Listen for a form submit event (enter or click button) and run updateCity when submitted:
    $("#city-form").submit(updateCity)










})