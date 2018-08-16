const express = require('express');
const router = express.Router();
//awsomeee
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'This is Get request fro /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name : req.body.name,
        price: req.body.price
    }

    res.status(201).json({
        message: 'This is Post request fro /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'This is special products.',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'you passed an id'
        })
    }
})

router.patch('/:productId', (req, res, next) => {

    res.status(200).json({
        message: 'you updated this product'
    })

})

router.delete('/:productId', (req, res, next) => {

    res.status(200).json({
        message: 'you delete this product'
    })

})

module.exports = router;
