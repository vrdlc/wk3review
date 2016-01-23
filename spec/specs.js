describe("countUp", function() {
  // it("counts up by 1 to the given number", function() {
  //   expect(countUp(5)).to.eql([0, 1, 2, 3, 4, 5])
  // }); //NO LONGER IN USE
  it("returns 'ping' when given a number divisible by 3", function() {
    expect(countUp(3)).to.eql([1, 2, "ping"])
  });
  it("returns 'pong' when given a number divisible by 5", function() {
    expect(countUp(5)).to.eql([1, 2, 'ping', 4, "pong"])
  });
  it("returns 'pingpong' when given a number divisible by 15", function() {
    expect(countUp(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"])
  });

});
