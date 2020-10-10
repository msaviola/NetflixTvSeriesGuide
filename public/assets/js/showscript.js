$(function () {
    $(".new-show").on("submit", function (event) {
        event.preventDefault();

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
            data: newCat
          }).then(
            function() {
              console.log("created new cat");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

    $(".mood-button").on("click", function(event){
        event.preventDefault();

        var chosenMood = $('.mood-button').val().trim()

        $.ajax({
            url: "/api/shows/mood/" + chosenMood,
            method: "GET"
        }).then(function(response){

            

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
