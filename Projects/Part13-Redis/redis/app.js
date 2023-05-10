const express = require('express');
const app = express();
const port = 3000;

const ExpressRedisCache = require('express-redis-cache')
const cache = ExpressRedisCache({
  expire: 10, // optional: expire every 10 seconds
})

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
function greet(req, res) {
  const between1and3seconds =
    1000 + Math.floor(Math.random() * Math.floor(2000))
  wait(between1and3seconds).then(() =>
    res.send(`Hello, I just waited ${between1and3seconds} ms`),
  )
}



app.get('/', greet);
app.get('/cached', cache.route(), greet)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
