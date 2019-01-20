$(document).ready(function () {

    // Initial array of cities
    var cities = ["Vienna", "San Francisco", "Toronto", "Ho Chi Minh City", "Dallas", "Machu Picchu", "Nairobi", "Tokyo",
        "Seattle", "Mexico City", "Barcelona", "Hong Kong", "Rome", "Cairo", "Buenos Aires", "Moscow", "Cape Town", "Sydney", "Lima", "Montreal",
        "Luanda", "New York", "Venice", "Beijing", "New Dehli", "Bangkok", "Vancouver", "Los Angeles", "Caracas", "Lagos", "Cancun"]

    // displayCityInfo function re-renders the HTML to display the appropriate content
    // function displayCityInfo() {

    var city = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + city + "&api_key=JMZ8KfJzhZWbdprATa1oBMjhntYXGJLK&limit=10&rating=G&lang=en"
    // // Creating an AJAX call for the specific city button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        //Creating a div for the gifs
        var gifDiv = $("<div>");
        
        // Saving the image_original_url property
        var gifImage = response.data.url;
        var gifDiv=$("<img>");
        // gifDiv.attr("src", "city-image");
        // gifDiv.attr("alt", "gif-image");
        $("#cities-view").prepend(gifImage);

    

        // Creating and storing an image tag
        // var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        // catImage.attr("src", imageUrl);
        // catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        // $("#images").prepend(catImage);
      });
    //         // Storing the rating data
    //         var rating = response.rating;
    // var results = response.data;

    // Looping through each result item
     // // Function for displaying city buttons
     function renderButtons() {

        //     // Deleting the cities prior to adding new cities
        //     // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        //     // Looping through the array of cities
        for (var i = 0; i < cities.length; i++) {

            // Then dynamicaly generating buttons for each city in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            //         // Adding a class of city-btn to our button
            a.addClass("city-btn");
            // Adding a data-attribute
            a.attr("data-name", cities[i]);
            // Providing the initial button text
            a.text(cities[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }
    


    // // // This function handles events where a city button is clicked
    $("#add-city").on("click", function (event) {
        event.preventDefault();
        // //     // This line grabs the input from the textbox
        var city = $("#city-input").val().trim();

        // //     // Adding city from the textbox to our array
        cities.push(city);

        // //     // Calling renderButtons which handles the processing of our city array
        renderButtons();
    });
    
        // Creating and storing a div tag for gifs
        

        // Creating an element to have the rating displayed
        // var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        // var gifDiv = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        // gifDiv.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the animalDiv
        // gifDiv.append(p);
        // gifDiv.append(animalImage);

        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        // $("#gifs-appear-here").prepend(gifDiv);
    

    //         // Retrieving the URL for the image
    //         var imgURL = response.Poster;

    //         // Creating an element to hold the image
    //         var image = $("<img>").attr("src", imgURL);

    //         // Appending the image
    //         cityDiv.append(image);

    //         // Putting the entire city above the previous cities
    //         $("#cities-view").prepend(cityDiv);
    //     });

    // }


   

    //making the click on the gif animate and still on clicks 
    // $(".gif").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        // var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        // if (state === "still") {
            // $(this).attr("src", $(this).attr("data-animate"));
            // $(this).attr("data-state", "animate");
        // } else {
            // $(this).attr("src", $(this).attr("data-still"));
            // $(this).attr("data-state", "still");
        // }
    // });

    // Adding a click event listener to all elements with a class of "city-btn"
    // $(document).on("click", ".city-btn", displayCityInfo);

    // // Calling the renderButtons function to display the intial buttons
    renderButtons();
})