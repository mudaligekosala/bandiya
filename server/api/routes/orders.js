const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is Order GET'
    })
})

router.post('/', (req, res, next) => {
const order = {
    productId: req.body.productId,
    quntity: req.body.quntity
}

    res.status(201).json({
        message: 'this is Order POST'
        , order: order
    })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'this is Order GET from id',
        id: req.params.orderId
    })
})

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'this is Order PATCH from id',
        id: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'this is Order Delete from id',
        id: req.params.orderId
    })
})

module.exports = router;