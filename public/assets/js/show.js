console.log("you are in show.js");
$(document).ready(function(){
    // Write index page your CLIENT-SIDE logic here
    // This will run in the browser
    var ShowContainer = $(".index-container");
    var shows;


    // This function grabs posts from the database and updates the view
  // This function grabs todos from the database and updates the view
  function getShows() {
    $.get("/api/shows", function(data) {
        shows = data;
      initializeRows();
    });
  }
   // Getting the initial list of posts
  
 
    // InitializeRows handles appending all of our constructed post HTML inside
  // ShowContainer
  function initializeRows() {
    ShowContainer.empty();
    var showsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
        showsToAdd.push(createNewRow(posts[i]));
    }
    ShowContainer.append(postsToAdd);
  }

  
  
  getShows();
});

