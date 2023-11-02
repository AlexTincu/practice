const superagent = require('superagent');
// const request = require('request');

const url = 'https://www.boredapi.com/api/activity';

superagent
  .get(url)
  .then((err, res) => {
    console.log(res.body);
  })
  .catch((err) => {
    console.log(err);
  });

// request.get(
//   {
//     url,
//     json: true,
//   },
//   (err, resp) => {
//     if (err) return res.send(`Error: ${err}`);
//     console.log(resp.body);
//   },
// );
