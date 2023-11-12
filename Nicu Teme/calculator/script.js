function calculateTotal(params) {
  const {
    initialAmount,
    contribution,
    years,
    ratePerYear,
    ratePerYearVariance,
    compound_frequency = "monthly",
  } = params;

  let rate = ratePerYear / 100; // percent
  
  let rateVarianceUp = ratePerYearVariance /100 +rate;
  let rateVarianceDown = rate - ratePerYearVariance / 100 ;
  
  rate = compound_frequency === "monthly" ? rate / 12 : rate;

   rateVarianceUp =
     compound_frequency === "monthly" ? rateVarianceUp / 12 : rateVarianceUp;
    
  rateVarianceDown =
  compound_frequency === "monthly" ? rateVarianceDown / 12 : rateVarianceDown;

 
  let resultUp = initialAmount;
   let result = initialAmount;
  let resultDown = initialAmount;
  console.log(resultDown)
  let resultByYear = [];

  for (let year = 0; year < years; year++) {
    for (let month = 0; month < 12; month++) {
      if (compound_frequency === "monthly") {
        resultUp += resultUp * rateVarianceUp + contribution;
        result += result * rate + contribution;
        resultDown += resultDown * rateVarianceDown + contribution;
       
      } else {
        result += contribution;
        resultDown +=  contribution;
        resultUp +=  contribution;
      }
    }

    if (compound_frequency !== "monthly") {
      result += result * rate;
      resultDown += resultDown * rateVarianceDown;
      resultUp += resultUp * rateVarianceUp;
    }

    resultByYear.push(
      {
        year,
        result: result.toFixed(0),
        resultUp: resultUp.toFixed(0),
        resultDown: resultDown.toFixed(0),
      }
      
    );
  }
   console.log(resultByYear);
  return resultByYear;

}

function calculate() {
  const initialAmount = +document.getElementById("initialAmount").value;
  const contribution = +document.getElementById("contribution").value;
  const years = +document.getElementById("years").value;
  const ratePerYear = +document.getElementById("rate").value;
  const ratePerYearVariance = +document.getElementById("variance_rate").value;
  const compound_frequency =
    document.getElementById("compound_frequency").value;

  const resultByYear = calculateTotal({
    initialAmount,
    years,
    contribution,
    ratePerYear,
    ratePerYearVariance,
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
  tableHtml +=
    "<tr><td>Year</td><td>Amount with + estimated rate</td><td>Amount with estimated rate</td><td>Amount with - estimated rate</td></tr>"; // first row
  resultByYear.forEach((item) => {
    tableHtml += `<tr><td>${item.year}</td><td>${item.resultUp}</td><td>${item.result}</td><td>${item.resultDown}</td></tr>`;
  });
  tableHtml += "</table>";

  document.getElementById("result").innerHTML = finalResultText + tableHtml;

  resultElem.classList.remove("d-none");
}