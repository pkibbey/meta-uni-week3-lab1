const express = require("express")
const router = express.Router()

const gift = {
    id: 0,
    name: 'test'
}

router.get('/:id', async (req, res, next) => {
    console.log('req: ', req.params.id);
    res.status(200).json(gift)
})

module.exports = router