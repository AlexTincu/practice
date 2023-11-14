'use strict';

// simple asyncronous example
// console.log('Test start'); // cod sincron
// setTimeout(() => console.log('1 sec timer'), 0); // cod asincron
// console.log('Test end'); // cod sincron

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const restCountriesUrl = 'https://restcountries.com/v3.1/name';
const getCountryByCodeApiUrl = 'https://restcountries.com/v3.1/alpha';

const renderCountry = function (data, className = '') {
  const [[, langName]] = Object.entries(data.languages);
  const [[, { name: currencyName }]] = Object.entries(data.currencies);

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" src="${data.flags.alt}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${langName}</p>
      <p class="country__row"><span>💰</span>${currencyName}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////

/* // Our First AJAX Call: XMLHttpRequest
///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    renderCountry(data);
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

///////////////////////////////////////

/* // Welcome to Callback Hell
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');


    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////////////////////////////////

/*// Promises and fetch API
// Consuming Promises & Chaining Promises

const getCountryData = function (country) {
  fetch(`${restCountriesUrl}/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.log(err.message);
      renderError(`Something went wrong ${err.message}`);
    });
};
// getCountryData('portugal');

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/

///////////////////////////////////////

/*// Handling Rejected Promises
// Throwing Errors Manually

const getCountryData = function (country) {
  // Country 1
  fetch(`${restCountriesUrl}/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const { borders } = data[0];

      if (!borders) throw new Error(`Neighbour not found`);

      const [neighbour] = borders;
      // const neighbour = 'dfsdfdef';

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryData('australia');
*/

///////////////////////////////////////

/* // Make the code cleaner
const getCountryData = function (country) {
  // Country 1
  getJSON(`${restCountriesUrl}/${country}`, 'Country not found')
    .then(data => {
      const [country] = data;

      renderCountry(country);

      if (!country.borders) throw new Error('No neighbour found!');

      const [neighbour] = country.borders;

      // Country 2
      return getJSON(
        `${getCountryByCodeApiUrl}/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err.message} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');
*/

///////////////////////////////////////

/* // Coding Challenge #1

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

My note: use https://geocode.maps.co/reverse?lat=52.508&lon=13.381 instead of https://geocode.xyz/52.508,13.381?geoit=json
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/* // Solution for Coding Challenge #1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocode ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
*/
///////////////////////////////////////

/*
// The Event Loop in Practice
console.log('Test start');
// callbacks from timers are executed in callback queue, timers are not guaranteed
setTimeout(() => console.log('0 sec timer'), 0);

// callbacks from promises are executed with priority, in microtasks queue
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) { }
  console.log(res);
});

console.log('Test end');
*/

///////////////////////////////////////

/* // Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise
  .then(function (response) {
    console.log(response);
  })
  .catch(error => console.error(error.message));

*/

///////////////////////////////////////

/* // Promisifying setTimeout

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

///////////////////////////////////////

/* // Promisifying the Geolocation API
const getCurrentPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getCurrentPosition().then(pos => console.log(pos.coords));

const whereAmI = function () {
  getCurrentPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////

/* // Coding Challenge #2
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
This function returns a promise which creates a new image (use document.createElement('img')) and sets
the .src attribute to the provided image path. When the image is done loading, append it to the DOM element
with the 'images' class, and resolve the promise.
The fulfilled value should be the image element itself.
In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*// Solution for Coding Challenge #2

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

*/

///////////////////////////////////////

/* // Consuming Promises with Async/Await
// Error Handling With try...catch

const getCurrentPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getCurrentPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );

    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');
*/

/*
try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (err) {
  alert(err.message);
} finally {
  alert(err.message);
}
*/

///////////////////////////////////////

/* // Returning Values from Async Functions
const getCurrentPosition = function () {
  return new Promise(function (resolve, reject) {
    return navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getCountryByCoords = async function (lat, lng) {
  // const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`;

  const resGeo = await fetch(url);
  if (!resGeo.ok) throw new Error('Problem getting location data');
  const dataGeo = await resGeo.json();
  return dataGeo.address;
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getCurrentPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const dataGeo = await getCountryByCoords(lat, lng);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
const city = whereAmI();
console.log(city);

whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message} 💥`))
  .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();

 */

///////////////////////////////////////

/*// Running Promises in Parallel
// daca toate sunt rezolate, atunci vom avea un array cu toate rezultatele cerute,
// altfel vom avea eroare

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canadass', 'tanzania');
*/

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any

/* // Promise.race
// se opreste cand are un rezultat settled (fulfilled sau rejected) si-l returneaza
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  // console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

// Folosim Promise.race, spre exemplu, pentru situatiile in care vrem sa limitam timpul de asteptare dupa un promise.
// daca nu raspunde in timp util, renuntam la rezultat si consideram ca avem o eroare
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(3),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

*/

// Promise.allSettled
// returneaza rezultatul fiecarui promise, fulfilled sau rejected, nu conteaza.

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));


// Promise.allSettled([
//   getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//   getJSON(`https://restcountries.com/v3.1/name/xxyyy`),
//   getJSON(`https://restcountries.com/v3.1/name/italy`),
// ]).then(res => console.log(res));

// Promise.all
// ori toate, ori eroare (catch)
/*
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
 */

// Promise.any [ES2021]
// daca cel putin una din ele este fulfilled, acea este rezultatul,
// daca nu, catch se executa
/*
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
///////////////////////////////////////

/* // Coding Challenge #3

PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await 
(only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// Solution for Coding Challenge #3

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;
let currentImg2;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/*// PART 1
const loadNPause = async function () {
  try {
    currentImg = await createImage('img/img-1.jpg'); // Load image 1
    await wait(2);

    currentImg2 = await createImage('img/img-2.jpg'); // Load image 2
    currentImg.style.display = 'none';
    await wait(2);

    currentImg2.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
}
loadNPause();
*/

// PART 2

let sec = 0;
const timer = setInterval(() => {
  console.log(++sec);
}, 1000);

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));

    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));

  } catch (err) {
    console.error(err);
  } finally {
    clearInterval(timer);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
