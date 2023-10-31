function calculateTotal(params) {
  const {
    initialAmount,
    contribution,
    years,
    ratePerYear,
    compound_frequency = "monthly",
  } = params;

  let rate = ratePerYear / 100; // percent
  rate = compound_frequency === "monthly" ? rate / 12 : rate;

  let result = initialAmount;
  let resultByYear = [];

  for (let year = 0; year < years; year++) {
    for (let month = 0; month < 12; month++) {
      if (compound_frequency === "monthly") {
        result += result * rate + contribution;
      } else {
        result += contribution;
      }
    }

    if (compound_frequency !== "monthly") {
      result += result * rate;
    }

    resultByYear.push({ year, result: result.toFixed(0) });
  }

  return resultByYear;
}

function calculate() {
  const initialAmount = +document.getElementById("initialAmount").value;
  const contribution = +document.getElementById("contribution").value;
  const years = +document.getElementById("years").value;
  const ratePerYear = +document.getElementById("rate").value;
  const compound_frequency =
    +document.getElementById("compound_frequency").value;

  const resultByYear = calculateTotal({
    initialAmount,
    years,
    contribution,
    ratePerYear,
    compound_frequency,
  });

  let finalResult = resultByYear[resultByYear.length - 1].result;

  const result = new Intl.NumberFormat(navigator.languages[0], {
    style: "currency",
    currency: "USD",
  }).format(finalResult);

  const resultElem = document.getElementById("result");

  let finalResultText = `<h4>In ${years} years, you will have ${result}</h4>`;

  let tableHtml = '<table class="table table-striped">';
  tableHtml += "<tr><td>Year</td><td>Amount</td></tr>"; // first row
  resultByYear.forEach((item) => {
    tableHtml += `<tr><td>${item.year}</td><td>${item.result}</td></tr>`;
  });
  tableHtml += "</table>";

  document.getElementById("result").innerHTML = finalResultText + tableHtml;

  resultElem.classList.remove("d-none");
}
