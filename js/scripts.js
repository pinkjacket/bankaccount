//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

// user interface logic
$(document).ready(function() {


  $("form#movieform").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("#movies").val();
    var inputtedTimes = $("#times").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTimes, inputtedAge);
debugger;
    $("ul#ticket").append("<li><span class='movieticket'>" + newTicket.movie + "</span></li>");

    $(".movieticket").last().click(function() {
      $("#show-ticket").fadeIn();
      $("#show-ticket h2").text(newTicket.movie);
      $(".moviechoice").text(newTicket.movie);
      $(".timechoice").text(newTicket.time);
      $(".agegroup").text(newTicket.age);
      // $(".price").text(Ticket.age);

        // $("#addresses").click(function(){
        //   $("li").remove();
        // });
      });
    });
  });
