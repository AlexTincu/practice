const url = "https://www.boredapi.com/api/activity";

// fetch data from external url using Promises
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

// Async await
async function getRandomActivity() {
  const response = await fetch(url);
  const activities = await response.json();
  console.log(activities);
}

getRandomActivity();
