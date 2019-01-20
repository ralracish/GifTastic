// Initial array of cities
var cities = ["Vienna", "San Francisco", "Toronto", "Ho Chi Minh City", "Dallas", "Machu Picchu", "Nairobi", "Tokyo",
    "Seattle", "Mexico City", "Barcelona", "Hong Kong", "Rome", "Cairo", "Buenos Aires", "Moscow", "Cape Town", "Sydney", "Lima", "Montreal",
    "Luanda", "New York", "Venice", "Beijing", "New Dehli", "Bangkok", "Vancouver", "Los Angeles", "Caracas", "Lagos", "Cancun"]

//Function for displaying city data buttons
function renderButtons(){
    //Deleting cities prio.r to adding new cities so no repeat buttons
    // $("buttons-view").empty();

    //Looping through the array of cities
    for (var i=0; i < cities.length; i++){
        console.log(cities[i]);
        var button = $("<button>");
        // b.addClass("city-btn");
        // b.attr(cities[0]);
        // b.text(cities[0]);
        $("#buttons-view").append(button);
    }
}
renderButtons()