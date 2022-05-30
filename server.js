const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser');
const giftExchangeRouter = require('./routes/gift-exchange')
const app = express()

app.use(bodyParser.json({ extended: true }));

app.use(morgan("tiny"))

app.use('/gift-exchange', giftExchangeRouter)

const port = 3000

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
  return next(new NotFoundError())
})

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})
