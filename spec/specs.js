describe("titleCase", function(name) {
  it("capitalizes the first letter of a word", function() {
    titleCase("cat").should.equal("Cat");
  });
  it("only capitalizes the first letter of a word", function() {
    titleCase("CAT").should.equal("Cat");
  });
  it("should capitalize the first letter of a word and lowercase the subsequent letters", function() {
    titleCase("miCHael").should.equal("Michael");
  });
   it("only capitalizes the first letter of more than one word", function() {
    titleCase("CAT HAT").should.equal("Cat Hat");
  });
});

