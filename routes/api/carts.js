const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Cart = require('../../models/Cart');
// const validateTweetInput = require('../../validation/tweets');

// router.post('/', (req, res) => {
//     Cart.findOne({ _id: req.body.id})
//         .then(cart => {
//             if(cart){
                
//             }else{

//             }
//         })
// })


// router.get('/', (req, res) => {
//     Order.find()
//         .sort({ date: -1 })
//         .then(orders => res.json(orders))
//         .catch(err => res.status(404).json({ noproducts: 'No products found' }));
// });

// router.get('/user/:user_id', (req, res) => {
//     Order.find({ user: req.params.user_id })
//         .then(orders => res.json(orders))
//         .catch(err =>
//             res.status(404).json({ noordersfound: 'No orders found from that user' }
//             )
//         );
// });

// router.get('/:id', (req, res) => {
//     Order.findById(req.params.id)
//         .then(order => res.json(order))
//         .catch(err =>
//             res.status(404).json({ notweetfound: 'No tweet found with that ID' })
//         );
// });

module.exports = router;