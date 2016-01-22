var countUp = function(countTo) {
  var array = [];
  for (var n = 1; n <= countTo; n++) {
     if(n % 15 === 0) {
       array.push('pingpong');
    } else if(n % 5 === 0) {
        array.push('pong');
    } else if(n % 3 === 0) {
        array.push("ping")
    } else {
     array.push[n];
   }
  }; return array;
};


function write_letters(endResult){
    var items = document.getElementById("itemList");
    items.innerHTML = "";
    for (var n = 0; n < endResult.length; n++ ) {
        var item = document.createElement("li");
        item.innerHTML = endResult[n];
        items.appendChild(item);
    };
    return;
};

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {

    var countTo = parseInt($("input#countTo").val());
    var endResult = countUp(countTo);
    write_letters(endResult);

    event.preventDefault();
  });
});


//
// var ping = (i % 3 == 0);
// var pong = (i % 5 == 0);
// var pingpong = (i % 15 == 0);

// var countUp = function(countTo) {
//   var output = [];
//   for (var i=1; i <= countTo ; i+= 1)
//     output.push(i); {
//   };
//   return output;
//
// };

// var pingpong = function(countTo) {
//   var output = [];
//   for (var i = 1; i <= countTo; i ++)
//     output.push(i); {
//         for (var n = 1; n <= 100; n++) {
//           var output = "";
//           if (n % 3 == 0)
//             output += "ping";
//           if (n % 5 == 0)
//             output += "pong";
//
//         }
//     }
// }
// var countUp = function(input) {   //PASSED
//   var output = [];
//   for (var n=1; n <= input; n++) {
//     output.push(n);
//   };
//   return output;
//
// };
//
// var replaceThree = function(input) {
//   var pingpong = "";
//   for(var n = 0; n <= input; n++)
//   if(n % 3 === 0);
//   pingpong += "ping"
//
// };
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
