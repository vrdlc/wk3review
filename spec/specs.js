describe("countUp", function() {
  it("counts up by 1 to the given number", function() {
    expect(countUp(5)).to.eql([0, 1, 2, 3, 4, 5])
  });
});

describe("ping", function() {
  it("returns 'ping' when given a number divisible by 3", function() {
    expect(ping(3)).to.equal("ping")
  });
});

describe("pong", function() {
  it("returns 'pong' when given a number divisible by 5", function() {
    expect(pong(5)).to.equal("pong")
  });
});

describe("pingpong", function() {
  it("returns 'pingpong' when given a number divisible by 15", function() {
    expect(pingpong(15)).to.equal("pingpong")
  });
});

describe("allNumbers", function() {


});
//CHECK count-up FOR CODE TO TURN ARRAY INTO <ul>
