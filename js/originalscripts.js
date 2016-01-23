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
     array.push(n);
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
