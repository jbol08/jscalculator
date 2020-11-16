window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
   
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    // need eeverything to be set 
  const values = {amount:50000 ,year: 30 , rate: 3.2};
  const amountUi = document.getElementById("loan-amount");
  const rateUi = document.getElementById("loan-rate");
  const yearsUi = document.getElementById("loan-years");
  amountUi.value = values.amount;
  rateUi.value = values.rate;
  yearsUi.value = values.year;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 let currentValues = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
const monthlyRate = (values.rate / 100) / 12;
const totalPayments = Math.floor(values.years * 12);
return ((values.amount * monthlyRate) / 
(1- Math.pow((1 + monthlyRate),-totalPayments))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUi = document.getElementById('monthly-payment');
  monthlyUi.innerText = `$ ${monthly} `
}
