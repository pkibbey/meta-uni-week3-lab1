const express = require("express")
const router = express.Router()
const giftGiverModel = require('../model/gift-giver')
const { BadRequestError } = require('../utils/errors')

router.get('/', async (req, res) => {
    res.status(200).json(giftGiverModel.quiz())
})

router.post('/', async (req, res) => {
    if (!req.body?.userAnswers) {
        throw new BadRequestError("No 'userAnswers' were sent in the POST body")
    }

    res.status(200).json(giftGiverModel.quizResults(req.body.userAnswers))
})

module.exports = router