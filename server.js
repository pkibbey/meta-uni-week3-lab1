const express = require("express")
const morgan = require("morgan")
const giftExchangeRouter = require('./routes/gift-exchange')
const app = express()

app.use(morgan("tiny"))

app.use('/gift-exchange', giftExchangeRouter)

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})
