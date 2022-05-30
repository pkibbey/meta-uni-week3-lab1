const express = require("express")
const router = express.Router()
const giftExchangeModel = require('../model/gift-exchange')

const gift = {
    id: 0,
    name: 'test'
}

router.get('/:id', async (req, res) => {
    console.log('req: ', req.params.id);
    res.status(200).json(gift)
})

router.post('/pairs', async (req, res) => {
    res.status(200).json(giftExchangeModel.pairs(req.body.names))
})

router.post('/traditional', async (req, res) => {
    res.status(200).json(giftExchangeModel.traditional(req.body.names))
})

module.exports = router