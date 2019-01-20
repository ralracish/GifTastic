$(document).ready(function () {

    // Initial array of cities
    var cities = ["Vienna", "San Francisco", "Toronto", "Ho Chi Minh City", "Dallas", "Machu Picchu", "Nairobi", "Tokyo",
        "Seattle", "Mexico City", "Barcelona", "Hong Kong", "Rome", "Cairo", "Buenos Aires", "Moscow", "Cape Town", "Sydney", "Lima", "Montreal",
        "Luanda", "New York", "Venice", "Beijing", "New Dehli", "Bangkok", "Vancouver", "Los Angeles", "Caracas", "Lagos", "Cancun"]
    function renderButtons() {

        //Deleting the cities prior to adding new cities
        //(this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        //     // Looping through the array of cities
        for (var i = 0; i < cities.length; i++) {

            // Then dynamicaly generating buttons for each city in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of city-btn to our button
            a.addClass("city-btn");
            // Adding a data-attribute
            a.attr("data-name", cities[i]);
            // Providing the initial button text
            a.text(cities[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }
    renderButtons()

    //This function handles events where a city button is clicked
    $("#add-city").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var city = $("#city-input").val().trim();

        // Adding city from the textbox to our array
        cities.push(city);
        renderButtons()
    });

    $(".city-btn").on("click", function (event) {
        var city = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + city + "&api_key=JMZ8KfJzhZWbdprATa1oBMjhntYXGJLK&limit=10&rating=G&lang=en"
        // // Creating an AJAX call for the specific city button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            response.data.forEach(element => {
                var gifImg = $("<img width='150' height= '150'>");
                gifImg.addClass("gif")
                gifImg.attr("src", element.images.fixed_width_still.url);
                gifImg.attr("data-state", "still")
                gifImg.attr("data-still", element.images.fixed_width_still.url)
                gifImg.attr("data-animate", element.images.original.url)
                // gifImg.attr()
                // gifImg.attr("alt", "gif-image");
                // string interpolation:  $("#cities-view").prepend( "<p>Rating: " + element.rating.toUpperCase() + "</p>"  )
                $("#cities-view").prepend(`<p>Rating: ${element.rating.toUpperCase()}</p>`);
                $("#cities-view").prepend(gifImg);
            });
            console.log(response);
        })
    })

    //making the click on the gif animate and still on clicks 
    $(document).on("click", ".gif", function () {
        //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        //If the clicked image's state is still, update its src attribute to what its data-animate value is.
        //Then, set the image's data-state to animate
        //Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
        console.log("gif clicked")
    });
})