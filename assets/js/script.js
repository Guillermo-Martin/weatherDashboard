// Targeting HTML elements
var $submit = $('#submit');
var $city = $('#city');




// Submit button
$submit.on("click", function(event){
    event.preventDefault();
    
    // get city name
    // URI encode:  https://www.sitepoint.com/jquery-decode-url-string/
    var cityName = encodeURIComponent($city.val().trim());
    console.log(cityName);

    // AJAX request
    var apiKey = "5dec8c645acb4bf246d950b6137af75e";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
    
});