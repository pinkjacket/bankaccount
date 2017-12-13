
var total;

function Account(name, balance) {
this.name = name;
this.balance = balance;
}

  Account.prototype.withdrawFunds = function(inputtedWithdrawal) {
    this.balance = this.balance -= inputtedWithdrawal;
    // return initial + inputtedDeposit;
}

Account.prototype.depositFunds = function(inputtedInitialdepost) {
  this.balance = this.balance += inputtedInitialdepost;
  // return initial + inputtedDeposit;
}







// user interface logic
$(document).ready(function() {

  $("form.formaccount").submit(function(event) {
    // debugger;
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var balance = parseInt($("input#initialdepost").val());
    var newAccount = new Account(inputtedName, balance);


    $("span#balanceoutput").text(newAccount.balance)
    $("form.formDW").submit(function(event) {
      event.preventDefault();
      var inputtedDeposit = parseInt($("input#deposit").val());
      var inputtedWithdrawal = parseInt($("input#withdrawal").val());
console.log(newAccount.balance);

      $("span#balanceoutput").text(newAccount.balance)
    });


  });
});


// function accountChange() {
//   if ((inputtedDeposit === 0) && (inputtedWithdrawal !== 0)) {
//     return inputtedWithdrawal * -1;
//   } if ((inputtedDeposit !== 0) && (inputtedWithdrawal === 0)) {
//     return inputtedDeposit;
//   } else {
//     return inputtedDeposit - inputtedWithdrawal;
//   }
// }
