// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

$(document).ready(function () {


  $("#signup-btn").on("click", function (event){

  event.preventDefault()

  // console.log("electric")


  $.post("/api/createAccount", {
    email: $("#signUpEmail").val().trim(),
    password: $("#signUpPassword").val().trim(),
    first: $("#first-name-input").val().trim(),
    last: $("#last-name-input").val().trim()
  })
    .then(response => {
      window.location.reload();
      alert("Access Granted! You may proceed to login")
      console.log(response)
      // console.log("ajax")

      // response.redirect("/api/gameDisplay")

  
    })
    .catch(err => {
      throw err;
    })
  

  })

  $("#login-btn").on("click", function(event){
    event.preventDefault()

    $.post("/api/loginPage", {
      email: $("#loginEmail").val().trim(),
      password: $("#loginPassword").val().trim()
    }).then(function(){
      console.log("gotem")
      // $(".loginTab").text("Signed In")
      // window.location.replace("/");

        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
    
  })

  $("#submit-btn").on("click", function () {

    event.preventDefault()

    //data -id

    // localStorage.setItem('firstGame', ($("#name").val().trim()));

    // post request to save to file



    $.ajax({
      method: "GET",
      url: "/api/games",
      data: { 
      time: $("#time").val(),
      rating: $("#rating").val(),
      released_date: $("#released_date").val(),
      multiplayer: $("#multiplayer").val(),
      genre: $("#genre").val(),
      }
    })
      .then(response => {
        window.location.href = "/api/gamesDisplay"
        console.log(response)
        // console.log("ajax")

        // response.redirect("/api/gameDisplay")

    
      })
      .catch(err => {
        throw err;
      })

  })

  $.post()


})








// The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
