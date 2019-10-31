const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Product = require('../../models/Product');
// const validateTweetInput = require('../../validation/tweets');

router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({ noproducts: 'No products found' }));
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No tweet found with that ID' })
        );
});

// Stack Overflow Version
// app.delete('/:id', (req, res) => {
//     Product.remove({ _id: mongodb.ObjectID(req.params.id) }, (err, result) => {
//         if (err) return res.status(404).json(err)
//         console.log(req.body)
//         res.json({ msg: 'Product successfully destroyed' })
//     })
// })

router.delete('/:id', (req, res) => {
    Product.remove({ _id: mongodb.ObjectID(req.params.id) })
        .then(() => res.json({ msg: 'Product successfully erased.' }))
        .catch(err => res.status(404).json(err))
})

// router.update('/:id', (req, res) => {
//     Product.update({ _id: mongodb.ObjectID(req.params.id) },
//         req.params.product    
//     )
//         .then(updated_product => res.json(updated_product))
//         .catch(err => res.status(404).json(err))
// })
module.exports = router;
