describe("FizzBuzz", function() {
  it("is divisable by 3 return fizz", function() {
    expect(fizzbuzz(3)).toEqual('Fizz')
  })

  it("is divisable by 5 return buzz", function() {
    expect(fizzbuzz(5)).toEqual('Buzz')
  })

  it("is divisable by both 3 and 5 return fizzbuzz", function() {
    expect(fizzbuzz(15)).toEqual('FizzBuzz')
  })

  describe("Not expected to return fizzbuzz", function() {
    it("returns the number back", function() {
      expect(fizzbuzz(7)).toEqual(7)
    })

    it("returns the number back (2)", function() {
      expect(fizzbuzz(16)).toEqual(16)
    })
  })
})
