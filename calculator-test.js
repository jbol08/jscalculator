
it('should calculate the monthly rate correctly', function () {
  // ...
  let value = {amount:10000, years:30, rate: 5}
  expect(calculateMonthlyPayment(value)).toEqual('53.68');
  
});


it("should return a result with 2 decimal places", function() {
  // ..
  let value = {amount:10000, years:30, rate: 5.96}
  expect(calculateMonthlyPayment(value)).toEqual('59.70')
});

/// etc
