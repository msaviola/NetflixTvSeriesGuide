$(function () {
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
            function() {
              console.log("created new show");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

    $(".mood-button").on("click", function(event){
        event.preventDefault();

        var chosenMood = $(this).val().trim();

        console.log(chosenMood)

        $.ajax({
            url: "/api/shows/mood/" + chosenMood,
            method: "GET"
        }).then(function(response){

          $("#show-content").empty();
          
          for (var i = 0; i < response.length; i++){
            console.log(response[i].title)

            
            

            var showCard = $('<div>');
            showCard.addClass("card");
            showCard.css("width:200px;");
            $("#show-content").append(showCard);

            // var cardBody = $('<div>');
            // cardBody.addClass("card-body");
            // showCard.append(cardBody)

            var cardTitle = $('<h5>');
            cardTitle.addClass("card-title");
            cardTitle.text(response[i].title);
            showCard.append(cardTitle)

            var cardUl = $('<ul>');
            cardUl.addClass("list-group list-group-flush");
            showCard.append(cardUl);

            var cardGenre = $('<li>');
            cardGenre.addClass("list-group-item");
            cardGenre.text(`Genre: ${response[i].genre}`);
            cardUl.append(cardGenre);





          }


            

        })

    })

    // $("#cheerful").on("click", function(event){
    //     event.preventDefault();

    //     $.ajax("/api/shows/mood/cheerful" {
    //         type:
    //         data: 
    //     })


    // })



});
