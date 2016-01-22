var countUp = function(countTo) {
  var output = [];
  for (var n=0; n <= countTo ; n++) {
    output.push(n);
  };
  return output;
};

function write_letters(endResult){
    var items = document.getElementById("itemList");
    for (var i = 0; i < endResult.length; i++ ) {
        var item = document.createElement("li");
        item.innerHTML = endResult[i];
        items.appendChild(item);
    };
    return;
};


var replaceThree = function(input) {
  // var pingpong = "";
  for(var n = 0; n <= input; n++) {
  if(n % 3 === 0);
  };
  return "ping";
};


$(document).ready(function() {
  $("form#pingpong").submit(function() {
    //debugger;
    var countTo = parseInt($("input#countTo").val());
    var endResult = countUp (countTo);
    write_letters(endResult);

    // write_letters(endResult) {
    //   return items;
    // }

    //$("#itemList").text(endResult);

    event.preventDefault();
  });
});
// var countUp = function(input) {   //PASSED
//   var output = [];
//   for (var n=1; n <= input; n++) {
//     output.push(n);
//   };
//   return output;
//
// };
//

// // var replaceFive = function(input) {
// //   // var pingpong = "";
// //   for(var n = 0; n <= input; n++) {
// //   if(n % 5 === 0);
// //   };
// //   return "pong";
// // };
// //
// // var replaceFifteen = function(input) {
// //   // var pingpong = "";
// //   for(var n = 0; n <= input; n++) {
// //   if(n % 15 === 0);
// //   };
// //   return "pingpong";
// // };
//
// console.log()
// $(document).ready(function() {
//   $("form#pingpong").submit(function() {
//     // var countTo = parseInt($("input#countTo").val());
//     debugger;
//
//   });
// });
// //CHECK count-up FOR CODE TO TURN ARRAY INTO <ul>
