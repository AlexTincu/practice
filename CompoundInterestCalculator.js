const params = {
  initialDeposit: 0,
  periodicDeposit: 12000,
  annualRate: 7.23,
  yearsOfInvestment: 20,
  depositFrequency: "yearly",
};

const currencyFormat = new Intl.NumberFormat("ro", {
  style: "currency",
  currency: "EUR",
});

const calculate = function (params) {
  // destructuring
  const {
    initialDeposit,
    periodicDeposit,
    annualRate,
    yearsOfInvestment,
    depositFrequency,
  } = params;

  let rate = annualRate / 100;
  if (depositFrequency === "monthly") {
    rate = rate / 12;
  }

  let total = initialDeposit;

  for (let i = 1; i <= yearsOfInvestment; i++) {
    if (depositFrequency === "monthly") {
      for (let i = 1; i <= 12; i++) {
        const interest = total * rate;
        total += periodicDeposit + interest;
      }
    } else {
      const interest = total * rate;
      total += periodicDeposit + interest;
    }
  }

  return total.toFixed(2);
};

const result1 = calculate({
  ...params,
  periodicDeposit: 1000,
  depositFrequency: "monthly",
});
const result2 = calculate(params);

console.log(
  `Total amount after ${
    params.yearsOfInvestment
  } years is with monthly deposits is ${currencyFormat.format(result1)}`
);

console.log(
  `Total amount after ${
    params.yearsOfInvestment
  } years is with yearly deposits is ${currencyFormat.format(result2)}`
);
