//business logic
var price = 10;
var matinee = 8;
function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}
Ticket.prototype.finalprice = function() {
  if (this.time === "12:00") {
    var ticketPrice = matinee;
  } else {
    var ticketPrice = price;
  }
  if ((this.age === "youth") || (this.age === "senior")) {
    ticketPrice = ticketPrice * 0.8;
  }
  return ticketPrice;
}
// user interface logic
$(document).ready(function() {


  $("form#movieform").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("#movies").val();
    var inputtedTimes = $("#times").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTimes, inputtedAge, price);
    var finalPrice = newTicket.finalprice();
    $("ul#ticket").append("<li><span class='movieticket'>" + newTicket.movie + "</span></li>");

    $(".movieticket").last().click(function() {
      $("#show-ticket").fadeIn();
      $("#show-ticket h2").text(newTicket.movie);
      $(".moviechoice").text(newTicket.movie);
      $(".timechoice").text(newTicket.time);
      $(".agegroup").text(newTicket.age);
      $(".price").text(finalPrice);

        // $("#addresses").click(function(){
        //   $("li").remove();
        // });
      });
    });
  });
