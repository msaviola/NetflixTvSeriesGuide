$(function () {

  //script to add new show to database in post.html page
  $(".new-show").on("submit", function (event) {
    event.preventDefault();

    console.log("submit works")

    var newShow = {
      title: $("#title").val().trim(),
      genre: $("[name=genre]:checked").val().trim(),
      seasons: $("#seasons").val().trim(),
      mood: $("[name=mood]:checked").val().trim(),
      completed: $("[name=completed]:checked").val().trim(),
      length: $("[name=length]:checked").val().trim(),
    }

    $.ajax("/api/shows", {
      type: "POST",
      data: newShow
    }).then(
      function () {
        console.log("created new show");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //script to display shows that belong to the mood when button is clicked
  $(".mood-button").on("click", function (event) {
    event.preventDefault();

    var chosenMood = $(this).val().trim();

    console.log(chosenMood)




    $.ajax({
      url: "/api/shows/mood/" + chosenMood,
      method: "GET"
    }).then(function (response) {

      $("#show-content").empty();








      for (var i = 0; i < response.length; i++) {
        console.log(response[i].id)

        


        $("#show-content").css({
          "display": "flex",
          "flex-direction": "row",
          "padding": "20px",
          "flex-wrap": "wrap",
          "margin-bottom": "20px",
          "justify-content": "center"
        })

        var showCard = $('<div>');
        showCard.addClass("card text-white mb-3 show-card");
        showCard.css({"margin": "20px", "background-color": "#E50914"});
        $("#show-content").append(showCard);

        // var cardBody = $('<div>');
        // cardBody.addClass("card-body");d
        // showCard.append(cardBody)


        var cheerfulImages = ["public/assets/images/cheerfulimg2.jpeg", "public/assets/images/cheerfulIMAGE3.jpg", "public/assets/images/happy3.jpg", "public/assets/images/happy2.jpg", "public/assets/images/happy1.jpg"];
        var excitingImages = ["public/assets/images/ExcitedImage1.jpg", "public/assets/images/excitingimg2.jpg", "public/assets/images/excitingimage3.jpg", "public/assets/images/excitingimage4.jpg", "public/assets/images/excitingimage5.jpg"];
        var gloomyImages = ["public/assets/images/GloomyImg1.jpg", "public/assets/images/gloomy2.jpg", "public/assets/images/gloomy3.jpg", "public/assets/images/gloomy4.jpeg", "public/assets/images/gloomy5.jpg"];
        var romanticImages = ["public/assets/images/love1.jpg", "public/assets/images/love2.jpeg", "public/assets/images/love3.jpg", "public/assets/images/love4.jpeg", "public/assets/images/love5.jpg"]
        var angryImages = ["public/assets/images/angry1.jpg", "public/assets/images/angry2.jpeg", "public/assets/images/angry3.jpg", "public/assets/images/angry4.jpg", "public/assets/images/angry5.jpg"]
        var randomNum = Math.floor(Math.random() * 5);

        if (response[i].mood == "Cheerful") {
          console.log("CHEERFUL IMAGE")
          var imgSource = cheerfulImages[randomNum];
        } else if (response[i].mood == "Excited") {
          console.log("EXCITED IMAGE")
          var imgSource = excitingImages[randomNum];
        } else if (response[i].mood == "Gloomy"){
          console.log("GLOOMY IMAGE")
          var imgSource = gloomyImages[randomNum]
        } else if (response[i].mood == "Romantic"){
          console.log("ROMANTIC IAMGE")
          var imgSource = romanticImages[randomNum]
        } else if (response[i].mood = "Angry"){
          var imgSource = angryImages[randomNum]
        }





        var cardImage = $('<img>');
        cardImage.attr("src", imgSource);
        cardImage.css({ "height": "200px", "width": "300px" })
        showCard.append(cardImage);

        var cardTitle = $('<h3>');
        cardTitle.addClass("card-title show-title");
        cardTitle.css("padding", "10px")
        cardTitle.text(response[i].title);
        showCard.append(cardTitle)

        var cardUl = $('<ul>');
        cardUl.addClass("list-group list-group-flush ");
        showCard.append(cardUl);

        var cardGenre = $('<li>');
        cardGenre.addClass("list-group-item bg-danger");
        cardGenre.text(`Genre: ${response[i].genre}`);
        cardUl.append(cardGenre);

        var cardSeasons = $('<li>');
        cardSeasons.addClass("list-group-item bg-danger");
        cardSeasons.text(`Seasons: ${response[i].seasons}`);
        cardUl.append(cardSeasons);

        var cardFin = $('<li>');
        cardFin.addClass("list-group-item bg-danger");

        if (response[i].completed) {
          cardFin.text("This show has finished airing!")
        } else {
          cardFin.text("This show is still on the air!")
        }
        // cardFin.text(`Completed: ${response[i].completed}`)
        cardUl.append(cardFin);


        var cardLen = $('<li>');
        cardLen.addClass("list-group-item bg-danger");

        if (response[i].length){
          cardLen.text("Average Episode Runtime: Over 30mins")
        } else {
          cardLen.text("Average Episode Runtime: Under 30mins ")
        }

        cardUl.append(cardLen)

        // var viewRev = $('<button>');
        // viewRev.addClass("btn btn-dark view-review");
        // viewRev.text("View Reviews");
        // showCard.append(viewRev);

        // var newRev = $('<button>');
        // newRev.addClass("btn btn-secondary new-review");
        // newRev.text("Write a New Review");
        // showCard.append(newRev);

        var viewRev = $('<a>');
        viewRev.addClass("view-review");
        viewRev.attr('href', `/view-reviews?id=${response[i].id}`)
        viewRev.css({"background-color": "#8c8c8c",
          "color": "white",
          "font-size": "20px",
          "padding": "1em 1.5em",
          "text-decoration": "none",
          "text-transform": "uppercase"})
        viewRev.text("Click Here to View Reviews");
        showCard.append(viewRev);

        var newRev = $('<a>');
        newRev.addClass("new-review");
        newRev.attr('href', `/new-review?id=${response[i].id}`)
        newRev.data("id", response[i].id);
        newRev.css({"background-color": "#4d4d4d",
        "color": "white",
        "font-size": "20px",
        "padding": "1em 1.5em",
        "text-decoration": "none",
        "text-transform": "uppercase"})
        newRev.text("Click Here to Write a New Review");
        showCard.append(newRev);

        
      }
    

    })


  });

  // $(".new-review").on("click", function(event){
  //   event.preventDefault();

  //   var theID = $(this).data().trim();
  //       console.log(theID)

  // })

  $("#write-review").on("submit", function (event) {
    event.preventDefault();

    console.log("review submit works")

    var newReview = {
      user: $("#User").val().trim(),
      review: $("#Review").val()
    };

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    
    var showId = urlParams.get('id');
    console.log("THE ID ISSSS " + showId)

    $.ajax("/api/new-review/" + showId, {
      type: "POST",
      data: newReview
    }).then(
      function () {
        console.log("created new review");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


$(".see-all").on("click", function(event){

  event.preventDefault();

  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  
  var showId = urlParams.get('id');
  console.log("THE ID ISSSS " + showId)


  $.ajax({
    url: "/api/view-reviews/" + showId,
    method: "GET"
  }).then(function (response) {

    $("#review-container").empty();

    console.log(response)

    for(var i = 0; i<response.length; i++){

    console.log(response[i].user);

    var allReviews = $('#review-container');

    var revCard = $('<div>');
    revCard.addClass("review-card card text-white mb-3");
    allReviews.append(revCard);

    revUser = $('<div>');
    revUser.addClass("card-header");
    revUser.css("font-size", "40px")
    revUser.text(`User: ${response[i].user}`)
    revCard.append(revUser);

    revReview = $('<div>');
    revReview.addClass("card-body");
    revCard.append(revReview);

    revBody = $('<p>');
    revBody.addClass("card-text");
    revBody.css("font-style", "italic")
    revBody.text(`"${response[i].review}"`);
    revReview.append(revBody);
  }

  })

  
})





  


});
