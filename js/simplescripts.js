
var countUp = function(input) {
  var array = [];
  for (var n = 0; n <= input; n++) {
    array.push(n);
  };
  return array;
};


var ping = function(n) {
  // for (var n = 0; n <= 100; n++) {
    if(n % 3 === 0){
    return 'ping';
  }
}

var pong = function(n) {
  if(n % 5 === 0) {
    return 'pong';
  };
};

var pingpong = function(n) {
  if(n % 15 === 0) {
    return 'pingpong';
  }
}

var allNumbers = function(n) {
var array = []
  var output = ""
  for (var n = 0; n <= 17; n++) {
    array.push(n);
    if(n % 3 === 0){
    output += 'ping';
  } if(n % 5 === 0){
    output += 'pong';
  } if(n % 15 === 0){
    output += 'pingpong';
  } else {
    output += n;
  }
  }
}
