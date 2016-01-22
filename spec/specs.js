describe("countUp", function() {
  it("counts up by 1 to the given number", function() {
    expect(countUp(5)).to.eql([1, 2, 3, 4, 5])
  });
});

describe("replaceThree", function() {
  it("returns 'ping' when given a number divisible by 3", function() {
    expect(replaceThree("9")).to.equal("ping")
  });
});

describe("replaceFive", function() {
  it("returns 'pong' when given a number divisible by 5", function() {
    expect(replaceFive("10")).to.equal("pong")
  });
});

describe("replaceFifteen", function() {
  it("returns 'pingpong' when given a number divisible by 15", function() {
    expect(replaceFifteen("15")).to.equal("pingpong")
  });
});

//CHECK count-up FOR CODE TO TURN ARRAY INTO <ul>
